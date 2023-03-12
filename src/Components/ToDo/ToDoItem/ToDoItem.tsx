import { useState } from "react";
import { IToDoItem } from "../ToDo";
// import {ToDoList} from "../ToDo";
// import {setToDoList} from "../ToDo";
import "./ToDoItem.css";

interface ToDoItemProps {
  todoItem: IToDoItem;
}

const ToDoItem = ({ todoItem }: ToDoItemProps) => {
  const { id, task } = todoItem;
  const [isInEditMode, setIsInEditMode] = useState(false);
  // const [isInDeleteMode, setIsInDeleteMode] = useState(false);
  const [inputText, setInputText] = useState<string>(task);


  return (
    <li className="ToDoItem">

      {isInEditMode ? ( <><input
          type="text"
          placeholder="edit todo"
          className="ToDoItemInput"
          value = {inputText}
        />
        <button 
        // onclick = {onTodoUpdate}
        > Save </button></>) : ( <p> {task} </p>)}

      <span>
        <button onClick={() => setIsInEditMode(true)}> Edit </button>

        <button> Completed </button>

        <button 
        // onClick={()=>{setIsInDeleteMode(true)}}
          > Delete </button>
      
      </span>
    </li>
  );
};

export default ToDoItem;