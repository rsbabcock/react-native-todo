import React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

export default function TodoCard({ todo }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{todo.title}</Text>
                <Text style={styles.description}>{todo.description}</Text>
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
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
    description: {
        fontSize: 12,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    }
  });