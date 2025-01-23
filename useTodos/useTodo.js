import { useEffect, useReducer } from "react";
import todoReducer from "./todoReducer";

export default function useTodo(inicial) {

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, inicial,init);
  
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    
  
    const handleNewTodo = (todo) => {
      const action = {
        type: "[TODO] Add Todo",
        payload: todo
      };
      dispatchTodo(action);
    }
  
    const handleDeleteTodo = (id) => {
      const action = {
        type: "[TODO] Remove Todo",
        payload: id,
      };
      dispatchTodo(action);
    };
  
    const handleToggleTodo = (id) => {
      const action = {
        type: "[TODO] Toggle Todo",
        payload: id,
      };
      dispatchTodo(action);
    };

  return {
    todos,
    AllTodos: todos.length,
    Pending : todos.filter((todo) => todo.dono === false).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
}
