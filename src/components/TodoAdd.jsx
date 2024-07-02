import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  const initialValue={
    id: new Date().getTime() * 3,
    todo: "",
    done: false,
  }
  const{formState,handleOnChange,onResetForm}=useForm(initialValue)

  const handleOnSubmit = (event) => {
    if(formState.todo.length===0)return
    event.preventDefault()
    onNewTodo(formState)
    onResetForm()
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="form-control"
        id="todoInput"
        placeholder="Escribe tu tarea aquí..."
        onChange={handleOnChange}
        name="todo"
        value={formState.todo}
      />

      <button type="submit" className="btn btn-outline-primary mt-1" >
        Agregar
      </button>
    </form>
  );
}
