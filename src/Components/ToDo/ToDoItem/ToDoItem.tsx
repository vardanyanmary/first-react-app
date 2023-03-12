import { useState } from "react";
import { IToDoItem } from "../ToDo";
import "./ToDoItem.css";

interface ToDoItemProps {
  todoItem: IToDoItem;
}

const ToDoItem = ({ todoItem, onChangeItem, todosArray }: ToDoItemProps) => {
  const { id, task, isCompleted } = todoItem;
  const [isInEditMode, setIsInEditMode] = useState(false);

  
  //  Delete todo
  const deleteToDoItem = (id: number) => {
    const newToDos = onChangeItem([...todosArray.filter((todoItem: { id: number}) => todoItem.id !== id)]);
    onChangeItem(newToDos);
  };
  
  //  Completed todo
  const completeTask = (taskNameCompleted: string) => {
    onChangeItem(todosArray.filter((todoItem: { task: string; }) => {
      return todoItem.task != taskNameCompleted;
    })
    );
  };
  
  return (
    <li className="ToDoItem">
      {isInEditMode ? (
        <>
          <input
            type="text"
            placeholder="Edit to do"
            className="ToDoItemInput"
            />
          <button
          // onclick = {onTodoUpdate}
          > Save </button>
        </> ) : ( <p> {task} </p>)}
      <span>
        <button onClick={() => setIsInEditMode(true)}> Edit </button>
        <button 
        // onClick={() => completeTask()}
        > Completed </button>
        <button onClick={() => deleteToDoItem(id)} > Delete </button>
      </span>
    </li>
  );
};

export default ToDoItem;


//---------------
  // const [isInDeleteMode, setIsInDeleteMode] = useState(false);
  // const [inputText, setInputText] = useState<string>(task);
//--------------- 
  // const deleteToDoItem = (listTask: ToDoItemProps) => {
  //   const newToDos = toDoList.filter((toDoValue) => {
    //     return toDoValue !== listTask;
    //   });
  // };
//--------------
  // const completeTask = (id: ToDoItemProps) => {
  //   setToDoList(toDoList.map(todo) => {
  //       if (todo.id === id) {
  //         return {...todo, checked: !todo.checked}
  //       }
  //       return todo;
  //   })
  // }
//-------------
  // const handleChangeChecked = (id) => {
  //   const copy = [...toDoList]
  //   const current = copy.find(item => item.id === id)
  //   current.isCompleted = !current.isCompleted;
  //   setToDoList([...toDoList]);
  // };