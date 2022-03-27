import React from 'react';
import Emoji from 'a11y-react-emoji'
import { TodoContext } from '../../TodoContext';
import './Modal.css';


function NoEvents() {
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
       
        <div className='ModalBackgroundInicio'>
       <div className='column-modal'>
       <Emoji className='schedule-emoji' symbol="📅" label="schedule"/>
      

       <h1>No tienes pendientes por el momento
       <Emoji symbol="😃" label="sheep"/>
       </h1>
         <br></br>
         <button type='button' className='initialButton'  > Crear una nueva agenda</button>
       </div>
        
        </div>

    )
}
export { NoEvents };