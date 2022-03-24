import React from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUi(

    {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        completeTodo,
        deleteTodo,
        searchedTodos,
    }
) {
    return (
        <React.Fragment>
            <TodoCounter total={totalTodos}
                completed={completedTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue} />

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

            <CreateTodoButton />
        </React.Fragment>
    );
}
export { AppUi };