import { api } from "../../api";
import { ToDo } from "./typesToDo";

type CreateToDoResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

class ToDoService {
  async getAllToDos() {
    try {
      const response = await api.get<ToDo[]>("todos");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async createToDo(id: number, title: string) {
    try {
      const newTodo = { id, title };
      const res = await api.post<CreateToDoResponse>('todos', newTodo);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const toDoService = new ToDoService();
export default toDoService;
