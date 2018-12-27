import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { deleteToDo} from '../api';

class TodoCard extends Component {
    state = {
        hidden: false
    }

    handleDelete(id){
        setInterval(() => {
            deleteToDo(id)
          }, 1000);
    }
    render(){
        const todo = this.props.todo
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>{todo.title}</Text>
                    <Text style={styles.description}>{todo.description}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={()=>this.handleDelete(todo.id)}
                        style={styles.buttonDelete}
                    >
                        <Text>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigate('EditForm', { todo : todo })}
                        style={styles.buttonDelete}
                    >
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default TodoCard

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