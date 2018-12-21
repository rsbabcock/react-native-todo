import React, { Component } from 'react'
import { View, FlatList, Button, StyleSheet } from 'react-native'
import { getTodos } from '../api';
import TodoCard from './todoCard'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class ToDoList extends Component {

    state = {
        todos: []
    }
    componentDidMount() {
        getTodos().then(todos => this.setState({ todos }))

    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => navigate('ToDoForm', { name: 'ToDoForm' })}
                    title="Add Todo"
                />
                <FlatList
                    data={this.state.todos}
                    renderItem={({ item }) => <TodoCard todo={item} />}
                    keyExtractor={item => (item.id)}
                />
            </View>
        )
    }
}

export default ToDoList
