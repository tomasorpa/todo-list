import { useEffect, useReducer } from "react";
import { todoReducer } from "../use-reducer/todoReducer";
const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) || [];
  }, [todos]);
  const onNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const onDeleteTodo = (id) => {
    const action = {
      type: "Delete Todo",
      payload: id,
    };
    dispatch(action);
  };
  const onToggleTodo = (id) => {
    console.log(id);
    const action = {
      type: "Toggle Todo",
      payload: id,
    };
    dispatch(action);
  };

  return {
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todos,
    todoCount: todos.length,
    pendingTodos: todos.filter((todo) => !todo.done).length,
  };
};
