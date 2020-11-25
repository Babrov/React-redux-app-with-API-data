import {
    FETCH_USER,
    FETCH_USER_ALBUMS,
    FETCH_USER_POSTS,
    FETCH_USER_TODOS,
} from "../actions/UsersActions";

const initialState = {
    users: [],
    userPosts: [],
    userAlbums: [],
    userTodos: [],
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                users: action.payload.users,
            };
        case FETCH_USER_POSTS:
            return {
                ...state,
                userPosts: action.payload.userPosts,
            };
        case FETCH_USER_ALBUMS:
            return {
                ...state,
                userAlbums: action.payload.userAlbums,
            };
        case FETCH_USER_TODOS:
            return {
                ...state,
                userTodos: action.payload.userTodos,
            };
        default:
            return state;
    }
};

export default UsersReducer;
