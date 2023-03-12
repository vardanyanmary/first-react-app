import { useState } from "react";
import { IToDoItem } from "../ToDo";
// import {ToDoList} from "../ToDo";
// import {setToDoList} from "../ToDo";
import "./ToDoItem.css";

interface ToDoItemProps {
  todoItem: IToDoItem;
}

const ToDoItem = ({ todoItem }: ToDoItemProps) => {
  const { id, task, isCompleted } = todoItem;
  const [isInEditMode, setIsInEditMode] = useState(false);
  
  // const [isInDeleteMode, setIsInDeleteMode] = useState(false);
  // const [inputText, setInputText] = useState<string>(task);

  //   Delete todo

  // const deleteToDoItem = (id: number) => {
  //   setToDoList([...toDoList.filter((toDoValue) => toDoValue.id !== id)]);
  // };

  // const deleteToDoItem = (listTask: IToDoItem) => {
  //   const newToDos = toDoList.filter((toDoValue) => {
  //     return toDoValue !== listTask;
  //   });
  //   setToDoList(newToDos);
  // };

  //-------------------------------

  //Completed

  // const completeTask = (id: IToDoItem[id]) => {
  //   setToDoList(toDoList.map(todo) => {
  //       if (todo.id === id) {
  //         return {...todo, checked: !todo.checked}
  //       }
  //       return todo;
  //   })
  // }

  // const completeTask = (taskNameCompleted: string) => {
  //   setToDoList(
  //     toDoList.filter((todo) => {
  //       return todo.task != taskNameCompleted;
  //     })
  //   );
  // };

  // const handleChangeChecked = (id) => {
  //   const copy = [...toDoList]
  //   const current = copy.find(item => item.id === id)
  //   current.isCompleted = !current.isCompleted;
  //   setToDoList([...toDoList]);
  // };

  return (
    <li className="ToDoItem">
      {isInEditMode ? (
        <>
          <input
            type="text"
            placeholder="edit to do"
            className="ToDoItemInput"
          />
          <button
          // onclick = {onTodoUpdate}
          > Save </button>
        </> ) : ( <p> {task} </p>)}
      <span>
        <button onClick={() => setIsInEditMode(true)}> Edit </button>
        <button> Completed </button>
        <button> Delete </button>
      </span>
    </li>
  );
};

export default ToDoItem;
