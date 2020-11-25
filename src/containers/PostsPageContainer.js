import PostsPage from "../components/PostsPage";
import PostsAdd from "../components/PostsForm";
import "../styles/PostsPageContainer.scss";
import { connect } from "react-redux";
import { addPost } from "../actions/PostsActions";

const PostsPageContainer = (props) => {
    const OnSubmit = (values) => {
        props.addPost(values);
    };
    return (
        <div className="PostsPageContainer">
            <PostsAdd onSubmit={OnSubmit} />
            <PostsPage />
        </div>
    );
};

const mapStateToProps = (state) => ({
    newPost: state.posts.newPost,
    postList: state.posts.posts,
});

export default connect(mapStateToProps, { addPost })(PostsPageContainer);
