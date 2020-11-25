import React from "react";
import "../styles/PostsPageContainer.scss";
import PostsPage from "../components/PostsPage";
import PostsAdd from "../components/PostsForm";
import { connect } from "react-redux";
import { addPost } from "../actions/PostsActions";
import { fetchPosts } from "../actions/PostsActions";

class PostsPageContainer extends React.Component {
    OnSubmit = (values) => {
        this.props.addPost(values);
        const title = document.getElementById("title"),
            text = document.getElementById("text");
        title.value = "";
        text.value = "";
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.postList.unshift(nextProps.newPost);
        }
    }
    render() {
        return (
            <div className="PostsPageContainer">
                <PostsAdd onSubmit={this.OnSubmit} />
                <PostsPage postList={this.props.postList} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    newPost: state.posts.newPost,
    postList: state.posts.posts,
});

export default connect(mapStateToProps, { addPost, fetchPosts })(
    PostsPageContainer
);
