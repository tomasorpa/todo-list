import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/components/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");
describe("Testing <TodoApp/>", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 12, description: "Visit Cartagena", done: false },
      { id: 1, description: "Visit Bogota", done: false },
      { id: 124, description: "Visit Neiva", done: true },
      { id: 122, description: "Visit Barranquilla", done: true },
    ],
    pendingTodos: 2,
    todoCount: 4,
    onNewTodo: jest.fn(),
    onDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
  });
  test("Return the correct values", () => {
    render(<TodoApp />);
      screen.debug();
      expect(screen.getByText("Visit Cartagena")).toBeTruthy()
  });
});
