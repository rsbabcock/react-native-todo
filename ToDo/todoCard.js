import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'
import { deleteToDo } from '../api';

class TodoCard extends Component {
    render(){
        const todo = this.props.todo
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>{todo.title}</Text>
                    <Text style={styles.description}>{todo.description}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={() => deleteToDo(todo.id)}
                        style={styles.buttonDelete}
                    >
                        <Text>Delete</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.props.navigate('EditForm', { todo : todo })}
                        style={styles.buttonDelete}
                    >
                        <Text>Edit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
export default TodoCard

TodoCard.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    })
}
const styles = StyleSheet.create({

    card: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        width: 300
    },
    cardHeader: {
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 7,
        textAlign: 'left',
    },
    description: {
        fontSize: 12,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
    buttonDelete: {
        height: 37,
        width: 60,
        backgroundColor: '#5ED0FF',
        alignSelf: 'stretch',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5
    }
});