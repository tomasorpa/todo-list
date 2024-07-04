import { todoReducer } from "../../src/use-reducer/todoReducer";

describe("Testing TodoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
    {
      id: 2,
      description: "Testing the deleting of the todo",
      done: false,
    },
  ];
  test("It must return the initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });
  test("It must return a Todo", () => {
    const action = {
      type: "Add Todo",
      payload: {
        id: 2,
        description: "Testing the returning of the todo",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(3);
    expect(newState).toContain(action.payload);
  });
  test("It must delete Todos", () => {
    const action = {
      type: "Delete Todo",
      payload: initialState[1].id,
    };
    const newState = todoReducer(initialState, action);
    console.log(newState);
    expect(newState[0].id).toBe(1);
  });
  test("It must realize the toggle of the todos", () => {
    const action = {
      type: "Toggle Todo",
      payload: initialState[1].id,
    };
    const newValue = todoReducer(initialState, action);
    expect(newValue[1].done).toBeTruthy();
  });
});
