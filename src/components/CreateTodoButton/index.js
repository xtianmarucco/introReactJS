// import React from 'react';
// import './CreateTodoButton.css';

// function CreateTodoButton(props) {

//   const onClickButton = () => {
//     props.setOpenModal(true);
//   }
//   return (
//     <button className="CreateTodoButton"
//       onClick={onClickButton}
//     >+</button>
//   );
// }


// export { CreateTodoButton };

import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import { BsX, BsPlus } from "react-icons/bs";
import './CreateTodoButton.css';

export const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <button
        className="CreateTodoButton"
        type="submit"
        onClick={() => handleClick()}
      >
        {openModal ? <BsX/> : <BsPlus/>}
      </button>
    </>
  );
};
