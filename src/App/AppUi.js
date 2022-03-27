import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { NoEvents } from '../components/NoEvents';

function AppUi() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        openInicio,
      setopenInicio,
     
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            {/* {!searchedTodos.length && <NoEvents/>} */}
            <TodoCounter
            />
            <TodoSearch />
            
                <TodoList>
                    {loading && <p>Estamos cargando</p>}
                    {error && <p>Algo salio mal</p>} 
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
            

          {!!openModal && (
            <Modal ></Modal>)}

            <CreateTodoButton 
            setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}
export { AppUi };