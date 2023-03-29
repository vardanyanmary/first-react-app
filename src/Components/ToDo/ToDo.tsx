import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import "./ToDo.scss";
import { ToDo } from "../../api/Services/ToDoService/typesToDo";
import Button from "../UI/Button/Button";
import toDoService from "../../api/Services/ToDoService/ToDoService";
import { useToDo } from "../hooks/useToDo";

const ToDos = () => {
  const [todos, setToDos] = useState<ToDo[]>();
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const { 
    toDoValue, 
    createNewToDo, 
    handleValueChange 
  } = useToDo();

  const handleGetAllToDos = async () => {
    try {
      const todos = await toDoService.getAllToDos();
      setToDos(todos);
    } catch (error) {}
  };
  

  return (
    <div className="TodoList">
      <div className="InputButton">
        <h1> ToDo List </h1>

        <div className="addToDo">
          <input 
            type="text" 
            value={toDoValue} 
            onChange={handleValueChange} 
          />
          <Button onClick={ () => {createNewToDo(toDoValue)} } type="secondary">
            Add
          </Button>
        </div>

        <div className="ToDos">
          <Button type="secondary" onClick={handleGetAllToDos}>
            Get All To Dos
          </Button>
          {todos?.map((todo) => {
            return (
              <p key={todo.id}>
                {todo.id} - {todo.title}
              </p>
            );
          })}
        </div>

        <div>
          <ul>
            {toDoList.map((todo) => {
              return (
                <ToDoItem
                  key={todo.id}
                  todoItem={todo}
                  onChangeItem={setToDoList}
                  todosArray={toDoList}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDos;
