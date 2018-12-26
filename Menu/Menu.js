import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';



export default class Menu extends Component {
    render() {
        return (
                <ActionButton
                    buttonColor="rgba(231, 76, 60, 1)"
                    position="left"
                    verticalOrientation="down"
                    offsetX={5}
                    style={{zIndex: 5}}
                >
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => this.props.navigate('ToDoForm', { name: 'ToDoForm' })}>
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
        )
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});