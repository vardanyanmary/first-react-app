import { FC, useState } from "react";
import { IToDoItem } from "../ToDo";
import "./ToDoItem.css";

interface ToDoItemProps {
  todoItem: IToDoItem;
}

interface ChildComponentProps {
  onChangeItem: React.Dispatch<React.SetStateAction<IToDoItem[]>>
  todoItem: IToDoItem;
  todosArray:IToDoItem[]
}


const ToDoItem : FC<ChildComponentProps>  = ({ todoItem }: ToDoItemProps, {onChangeItem,todosArray}) => {

  const { id, task, isCompleted } = todoItem;
  const [isInEditMode, setIsInEditMode] = useState(false);
  
  
  //  Delete todo
  const deleteToDoItem = (id: number) => {
    const newToDos = onChangeItem([...todosArray.filter((todoItem: { id: number}) => todoItem.id !== id)]);
    onChangeItem(newToDos);
  };
  
  //  Completed todo
  const completeTask = (taskNameCompleted: ToDoItemProps) => {
    onChangeItem(todosArray.filter((todoItem: {isCompleted : boolean}) => {
      return todoItem.isCompleted != taskNameCompleted;
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
        <button  onClick={() => completeTask(isCompleted)} > Completed </button>
        <button onClick={() => deleteToDoItem(id)} > Delete </button>
      </span>
    </li>
  );
};

export default ToDoItem;




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