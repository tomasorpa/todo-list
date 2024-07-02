import { useEffect, useReducer } from "react";
import { todoReducer } from "../use-reducer/todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";


export const TodoApp = () => {
 const { todoCount,pendingTodos,onNewTodo,onDeleteTodo,onToggleTodo,todos}= useTodo()
  return (
    <>
      <h1>
        Todos:{todoCount},<small>Pending Todos: {pendingTodos}</small>
      </h1>
      <hr />

      <div className="row gap-0.5">
        <div className="col-7">
          {/* Aquí iría el contenido de TodoList, pero solo mostraremos un placeholder */}
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          ></TodoList>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* Aquí iría el contenido de TodoAdd, pero solo mostraremos un formulario simple */}
          <TodoAdd onNewTodo={onNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};
