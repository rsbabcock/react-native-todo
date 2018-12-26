import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ToDoList from './ToDo/ToDoList'
import ToDoForm from './Forms/todoForm';


const App = createStackNavigator(
  {
    ToDoList: { screen: ToDoList},
    ToDoForm: { screen: ToDoForm },
  },

);

class Menu extends Component{

}

export default createAppContainer(App)