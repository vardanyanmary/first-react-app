import { useEffect, useState } from "react";
import toDoService from "../../api/Services/ToDoService/ToDoService";
import { ToDo } from "../../api/Services/ToDoService/typesToDo";

export function useToDo() {
    const [title, setTitle] = useState("");
    const [todos, setToDos] = useState<ToDo[]>([]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };
    
    const createNewToDo = async () => {
      try {
        const res = await toDoService.createToDo(title);
        setToDos((prev) => [...prev, res.data]);
      } catch (error) {
        console.error(error);
      }
    
      return {
        todos,
        createNewToDo,
        handleChange,
      };
    };
    }
    
  //   const [title, setTitle] = useState("");
  //   const [toDoList, setToDoList] = useState<ToDo[]>([]);

  //   // Change
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(e.target.value);
  //   };

  //   useEffect(() => {
  //     const newToDo: ToDo = {
  //       userId: userId,
  //       id: id,
  //       title: title,
  //       completed: false,
  //     };
  //     setToDoList((prev) => [...prev, newToDo]);
  //     setTitle("");
  //     console.log(toDoList, "todo list");
  //   }, [toDoList]);

  //   const createNewToDo = async () => {
  //     try {
  //       const response = await toDoService.createNewToDo(
  //         userId,
  //         id,
  //         title,
  //         completed
  //       );
  //       return response;
  //     } catch (error) {}
  //   };

  //   return {
  //     title,
  //     handleChange,
  //     createNewToDo,
  //   };

