import { FC, useState } from "react";
import { ToDo } from "../../../api/Services/ToDoService/typesToDo";
import "./ToDoItem.scss";


interface ChildComponentProps {
  onChangeItem: React.Dispatch<React.SetStateAction<ToDo[]>>;
  todoItem: ToDo;
  todosArray: ToDo[];
}

const ToDoItem: FC<ChildComponentProps> = ({
  todoItem,
  onChangeItem,
  todosArray,
}) => {

  const { id, title, completed } = todoItem;
  const [ isInEditMode, setIsInEditMode ] = useState(false);

  //  Delete todo
  const deleteToDoItem = (id: number) => {
    const newToDos = todosArray.filter((todoItem) => todoItem.id !== id);
    onChangeItem(newToDos);
  };

  //  Completed todo
  const completeTask = (completedState: boolean) => {
    const newToDos = todosArray.filter((todoItem) => {
      return todoItem.completed !== completedState;
    });
    onChangeItem((prev) => {
      // const current = prev.find((todo) => todo.id === todoItem.id);
      // if (current) {
      // console.log(current);
      return prev.map((todo) => {
        if (todo.id === todoItem.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
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
          >
            {" "}
            Save{" "}
          </button>
        </>
      ) : (
        <p> {title} </p>
      )}
      <span>
        <button onClick={() => setIsInEditMode(true)}> Edit </button>
        <button onClick={() => completeTask(!completed)}> Completed </button>
        <button onClick={() => deleteToDoItem(id)}> Delete </button>
      </span>
    </li>
  );
};

export default ToDoItem;
