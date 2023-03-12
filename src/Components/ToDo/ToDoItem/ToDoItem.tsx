import { useState } from "react";
import { IToDoItem } from "../ToDo";
import "./ToDoItem.css";

interface ToDoItemProps {
  todoItem: IToDoItem;
}

const ToDoItem = ({ todoItem }: ToDoItemProps) => {
    const { id, isCompleted, task } = todoItem;
    const [isInEditMode, setIsInEditMode] = useState(false);
    const [inputText, setInputText] = useState<string>(task);

    const onTodoUpdate = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setInputText(newText);
    }

  return (
    <div className="ToDoItem">
      { isInEditMode ? ( <input type="text" placeholder="edit todo" className="ToDoItemInput" value = {task} onChange={(e) => onTodoUpdate(e)} /> ) : (<p> {task} </p>) }
      <span>
        <button onClick = {() => setIsInEditMode(true)} > Edit </button>
        <button>Complete</button>
        <button
        // onClick={() => deleteToDoItem()}
        >
          Delete
        </button>
      </span>
    </div>
  );
};

export default ToDoItem;

// const completeTask = (taskNameToDelete: string): void => {
//     setToDoList(
//       toDoList.filter((todo) => {
//         return todo.task != taskNameToDelete;
//       })
//     );
//   };