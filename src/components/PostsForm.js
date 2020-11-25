import { Field, reduxForm } from "redux-form";
import "../styles/PostsForm.scss";

const PostForm = (props) => {
    return (
        <form className="PostsForm" onSubmit={props.handleSubmit}>
            <h2>Add Post</h2>

            <div>
                <Field
                    id="title"
                    placeholder={"Title"}
                    name={"title"}
                    component={"input"}
                />
            </div>
            <div>
                <Field
                    id="text"
                    placeholder={"Write Something..."}
                    name={"body"}
                    component={"textarea"}
                />
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
};

const PostAdd = reduxForm({ form: "addPost" })(PostForm);

export default PostAdd;
