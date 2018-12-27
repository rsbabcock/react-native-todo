import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import {getTodos, editTodo } from '../api';


const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#5ED0FF',
  },
  text: {
    height: 40,
    // borderWidth: 1,
    margin: 0,
    marginLeft: 7,
    marginRight: 7,
    paddingLeft: 10,
  },
  borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 0.5,
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

class EditForm extends Component {
  state = {
    title: null,
    description: null,
  };

  handleChangeTitle = (text) => {
    this.setState({
      title: text,
    });
  }

  handleChangeDescription = (text) => {
    this.setState({
      description: text,
    });
  }

  handleEditPress = (id) => {
      const {title, description} = this.state
      const updatedTodo = {
          id: id,
          title: title,
          description: description
      }
    editTodo(updatedTodo)
    getTodos()
    .then(() => {
      this.props.navigation.goBack();
    })
  }

  render() {
      const todo = this.props.navigation.getParam('todo', 'null')
      console.log(todo)
      console.log(this.state)
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            onChangeText={this.handleChangeTitle}
            placeholder={todo.title}
            spellCheck={false}
            value={this.state.title}
          />
          <TextInput
            style={[ styles.text, styles.borderTop ]}
            onChangeText={this.handleChangeDescription}
            placeholder={todo.description}
            spellCheck={false}
            value={this.state.description}
          />
        </View>

        <TouchableHighlight
          onPress={()=>this.handleEditPress(todo.id)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EditForm;