import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/components/TodoItem";

describe("Testing <TodoItem/> Component", () => {
  const todo = {
    id: 1,
    description: "Soul Stone",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("Testing the default component", () => {
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
        done={todo.done}
      />
    );
    screen.debug();
    const liElement = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between gap-1 "
    );
    expect(spanElement.className).toBe("align-self-center  ");
    expect(spanElement.className).not.toBe("text-decoration-line-through");
  });
  test("Testing the component when the todo is completed", () => {
    todo.done = true;
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
        done={todo.done}
      />
    );
    screen.debug();
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(spanElement.className).toContain("text-decoration-line-through");
  });
  test("Testing the component when we click the todo", () => {
    todo.done = true;
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
        done={todo.done}
      />
    );
    screen.debug();
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test("Testing the component when we delete the todo", () => {
    todo.done = true;
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
        done={todo.done}
      />
    );
    screen.debug();
    const buttonElement = screen.getByRole("button",{name:"Delete"});
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
