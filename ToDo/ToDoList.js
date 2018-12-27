import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { FlatList } from 'react-navigation';
import { getTodos } from '../api';
import TodoCard from './todoCard'
import Menu from '../Menu/Menu';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        // backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

class ToDoList extends Component {
    static navigationOptions = {
        title: 'ToDo(s)',
    };

    state = {
        todos: []
    }
    componentDidMount() {
        this.props.navigation.addListener('didFocus',()=>{
            getTodos().then(todos => this.setState({ todos }))
        })

    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <ImageBackground source={require('../img/bg.png')} style={{width:'100%', height: '100%'}}>
            <View style={styles.container}>
                <Menu navigate={navigate} />
                <FlatList
                    data={this.state.todos}
                    renderItem={({ item }) => <TodoCard todo={item} navigate={navigate} />}
                    keyExtractor={item => (item.id)}
                />
            </View>
            </ImageBackground>
        )
    }
}

export default ToDoList
