import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const onClickButton = (message) =>{
    alert(message)
  }
  return (
    <button className="CreateTodoButton"
    onClick={ () => onClickButton('Holi, soy una alerta') }
    >+</button>
  );
}

export { CreateTodoButton };
