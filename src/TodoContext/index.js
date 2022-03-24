import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props) {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

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
        // item[todoIndex] = {
        //   text: item[todoIndex].text,
        //   completed: true
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {

        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.push(todoIndex);
        saveTodos(newTodos);
    };

    React.useEffect(() => {


    }, []);



    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            searchedTodos,
            setSearchValue,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider}