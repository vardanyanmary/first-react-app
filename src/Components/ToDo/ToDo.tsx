import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import "./ToDo.css";

export interface IToDoItem {
  id: number
  task: string
  isCompleted: boolean
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
    const newToDo:IToDoItem = {
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


    // const [state,setState] = useState(false)
 
    // return <ChildComponent  />
 
  return (
    <div className="TodoList">
      <div className="InputButton">
        <h1> ToDo List </h1>

        <div className="addToDo">
          <input type="text" value = {toDoValue} onChange = {handleChange} />
          <button onClick = {handleAddToDo} > Add </button>
        </div>

        <div>
          <ul>
            {toDoList.map((todo) => {
              return (
                <ToDoItem
                  key = {todo.id}
                  todoItem = {todo}
                  onChangeItem = { setToDoList }
                  todosArray = {toDoList}
                  // onChangeItem = {(props:any) => setToDoList(props)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDo;