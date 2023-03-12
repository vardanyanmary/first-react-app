import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import "./ToDo.css";

export interface IToDoItem {
  id: number;
  task: string;
  isCompleted: boolean;
}

const ToDo = () => {

  const [toDoValue, setToDoValue] = useState('');
  const [toDoList, setToDoList] = useState<IToDoItem[]>([]);

  // Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setToDoValue(newValue);
  };

  // Add to do
  const handleAddToDo = () => {
    if (!toDoValue) {
      return;
    }
    const id = toDoList.length + 1;
    const newToDo: IToDoItem = {
      id: id,
      task: toDoValue,
      isCompleted: false,
    };
    setToDoList((prev) => [...prev, newToDo]);
    setToDoValue('');
  };

  useEffect(() => {
    console.log(toDoList, "todo list");
  }, [toDoList]);

//change to dos
// const handleChangeChecked = (id) => {
//   const copy = [...toDoList]
//   const current = copy.find(item => item.id === id)
//   current.isCompleted = !current.isCompleted;
//   // setToDoList([...toDoList]);
// };

//Delete 
// const deleteToDoItem = (listTask) => {
//   const newToDos = toDoList.filter((toDoValue) => {
//     return toDoValue !== listTask;
//   });
//   setToDoList(newToDos);
// };
 
  return (
    <div className="TodoList">
      <div className="InputButton">
        <h1> ToDo List </h1>

        <div className="addToDo">
          <input type="text" value={toDoValue} onChange={handleChange} />
          <button onClick={handleAddToDo}> Add </button>
        </div>

        <div>
          <ul>
            {toDoList.map((todo) => {
              return <ToDoItem 
                  key={todo.id}
                  todoItem = {todo}
                  // toDoList = {toDoList}
                  // setToDoList = {setToDoList}
              />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDo;

//   Delete to do

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
