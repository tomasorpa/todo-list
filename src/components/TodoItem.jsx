export const TodoItem = ({ description, onDeleteTodo, id, onToggleTodo ,done}) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between gap-1 `}
    >
      <span
        className={`align-self-center ${
        done ? "text-decoration-line-through" : " "
        }`} 
        style={{ width: "330px" }}
        onClick={() => onToggleTodo(id)}
        aria-label="span"
      >
        {description}
      </span>
      <button
        className="btn btn-danger text-decoration-line-none"
        onClick={() => onDeleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
};
