export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_POSTS = "FETCH_USER_POSTS";
export const FETCH_USER_TODOS = "FETCH_USER_TODOS";
export const FETCH_USER_ALBUMS = "FETCH_USER_ALBUMS";

const userApi = "https://jsonplaceholder.typicode.com/users";

export const fetchUser = () => (dispatch) => {
    fetch(userApi)
        .then((res) => res.json())
        .then((users) =>
            dispatch({
                type: FETCH_USER,
                payload: { users },
            })
        );
};

export const fetchUserPosts = (userId) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((res) => res.json())
        .then((userPosts) => {
            dispatch({
                type: FETCH_USER_POSTS,
                payload: { userPosts },
            });
        });
};

export const fetchUserAlbums = (userId) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then((res) => res.json())
        .then((userAlbums) => {
            dispatch({
                type: FETCH_USER_ALBUMS,
                payload: { userAlbums },
            });
        });
};

export const fetchUserTodos = (userId) => (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then((res) => res.json())
        .then((userTodos) => {
            dispatch({
                type: FETCH_USER_TODOS,
                payload: { userTodos },
            });
        });
};
