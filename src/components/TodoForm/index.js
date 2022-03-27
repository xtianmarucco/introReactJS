import React from 'react'
import { TodoContext } from '../../TodoContext';


const TodoForm = () => {

    const [newTodosValue, setNewTodosValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodosValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal();
    };


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodosValue);
        setOpenModal();
    };


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label></label>
                <textarea placeholder='Agrega un nuevo ITEM a tu lista'
                onChange={onChange}
                value={newTodosValue}
                >

                </textarea>
                <div>     <button type='button' onClick={onCancel}>Cancelar</button>
                    <button type='submit' onClick={onSubmit}>Agregar</button></div>

            </div>
        </form>
    )
}

export { TodoForm };