import { render, screen } from "@testing-library/react";
import { TodoItem } from "../src/components/TodoItem";

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
    const spanElement=screen.getByLabelText("span")
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between gap-1 "
      );
    expect(spanElement.className).toBe("align-self-center  ");
    expect(spanElement.className).not.toBe("text-decoration-line-through");
  });
});
