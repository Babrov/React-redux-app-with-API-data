import { FETCH_TODO } from "../actions/ToDoActions";

const initialState = {
    todo: [],
};

const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...state,
                todo: action.payload.todo,
            };
        default:
            return state;
    }
};

export default ToDoReducer;
