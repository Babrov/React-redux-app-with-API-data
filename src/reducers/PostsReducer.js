import { ADD_POST, FETCH_POSTS } from "../actions/PostsActions";

const initialState = {
    posts: [],
    newPost: {},
};
const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload.posts,
            };
        case ADD_POST:
            return {
                ...state,
                newPost: action.payload.newPost,
            };
        default:
            return state;
    }
};

export default PostsReducer;
