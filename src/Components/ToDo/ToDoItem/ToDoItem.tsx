import { FC, useState } from "react";
import { IToDoItem } from "../ToDo";
import "./ToDoItem.scss";

interface ChildComponentProps {
  onChangeItem: React.Dispatch<React.SetStateAction<IToDoItem[]>>;
  todoItem: IToDoItem;
  todosArray: IToDoItem[];
}

const ToDoItem: FC<ChildComponentProps> = ({
  todoItem,
  onChangeItem,
  todosArray,
}) => {
  const { id, task, isCompleted } = todoItem;
  const [isInEditMode, setIsInEditMode] = useState(false);

  //  Delete todo
  const deleteToDoItem = (id: number) => {
    const newToDos = todosArray.filter((todoItem) => todoItem.id !== id);
    onChangeItem(newToDos);
  };

  //  Completed todo
  const completeTask = (completedState: boolean) => {
    const newToDos = todosArray.filter((todoItem) => {
      return todoItem.isCompleted !== completedState;
    });
    onChangeItem((prev) => {
      // const current = prev.find((todo) => todo.id === todoItem.id);
      // if (current) {
        // console.log(current);
        return prev.map((todo)=> {
          if(todo.id===todoItem.id)
          {
            return {...todo,isCompleted:!todo.isCompleted}
          }
          return todo
        })
        // return [...prev, { ...current, isCompleted: !current?.isCompleted }];
      // }
      // return prev;
    });
    // onChangeItem(newToDos);
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
        </> ) : (<p> {task} </p> )}
      <span>
        <button onClick={() => setIsInEditMode(true)}> Edit </button>
        <button onClick={() => completeTask(!isCompleted)}> Completed </button>
        <button onClick={() => deleteToDoItem(id)}> Delete </button>
      </span>
    </li>
  );
};

export default ToDoItem;
