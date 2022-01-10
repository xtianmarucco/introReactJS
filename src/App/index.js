import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { AppUi } from './AppUi';
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];

function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const completeTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    // }
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const addTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.push(todoIndex);
    setTodos(newTodos);
  };




  return (
    <AppUi
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
     deleteTodo={deleteTodo}
    >

    </AppUi>
  );
}

export default App;
