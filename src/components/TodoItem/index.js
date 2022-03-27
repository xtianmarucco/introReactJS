import React from 'react';
import './TodoItem.css';
import { BsCheck, BsFillTrashFill } from "react-icons/bs";



function TodoItem(props) {


  return (
    <li className="TodoItem">
<BsCheck className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}/>
    
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <BsFillTrashFill className="Icon Icon-delete"
      onClick={ props.onDelete }
      />
        
      
    </li>
  );
}

export { TodoItem };
