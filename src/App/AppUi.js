import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';


function AppUi() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter
            />
            <TodoSearch />
            {() => (
                <TodoList>
                    {loading && <p>Estamos cargando</p>}
                    {error && <p>Algo salio mal</p>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}

                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}

                        />
                    ))}
                </TodoList>
            )}



            <CreateTodoButton />
        </React.Fragment>
    );
}
export { AppUi };