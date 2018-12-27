import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ToDoList from './ToDo/ToDoList'
import ToDoForm from './Forms/todoForm';
import EditForm from './Forms/editForm'



const App = createStackNavigator(
  {
    ToDoList: { screen: ToDoList},
    ToDoForm: { screen: ToDoForm },
    EditForm: {screen: EditForm},
  }
);


export default createAppContainer(App)