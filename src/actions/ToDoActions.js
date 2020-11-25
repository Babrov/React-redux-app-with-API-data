export const FETCH_TODO = "FETCH_TODO";
const todoApi = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => (dispatch) => {
    fetch(todoApi)
        .then((res) => res.json())
        .then((todo) =>
            dispatch({
                type: FETCH_TODO,
                payload: { todo },
            })
        );
};
