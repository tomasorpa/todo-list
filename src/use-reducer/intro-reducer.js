const initialState = [{
    id: 1,
    todo: "Recolectar la piedra del alma",
    done:false,
}]

export const todoReducer = (state = initialState, action=addTodoAction) => {
    if (action.type === "Adding todo") {
        return [...state,action.payload]
    }

    return state;
}
const newTodo={
    id: 2,
    todo: "Recolectar la piedra del poder",
    done:false,
}
const addTodoAction ={
    type: "Adding todo",
    payload:newTodo,
}


