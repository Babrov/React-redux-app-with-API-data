import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import UsersReducer from "./UsersReducer";
import ToDoReducer from "./ToDoReducer";
import { reducer as formReducer } from "redux-form";

const MainReducer = combineReducers({
    posts: PostsReducer,
    users: UsersReducer,
    todo: ToDoReducer,
    form: formReducer,
});

export default MainReducer;
