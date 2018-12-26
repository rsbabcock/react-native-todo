import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types'
import { deleteToDo } from '../api';

export default function TodoCard({ todo }) {
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
                    onPress={() => console.log("hello")}
                    style={styles.buttonDelete}
                >
                    <Text>Edit</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

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
        height: 30,
        width: 50,
        backgroundColor: '#5ED0FF',
        alignSelf: 'stretch',
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});