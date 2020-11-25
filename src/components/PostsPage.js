import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/PostsActions";
import "../styles/PostsPage.scss";

class PostsPage extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.postList.unshift(nextProps.newPost);
        }
    }

    render() {
        const { postList } = this.props;
        return (
            <div className="postsPage">
                <h1>Posts for this week</h1>
                {postList.map((post, i) => (
                    <div className="posts" key={post.title + i}>
                        <h3 className="postTitle">{post.title}</h3>
                        <p className="text">{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    postList: state.posts.posts,
    newPost: state.posts.newPost,
});

export default connect(mapStateToProps, { fetchPosts })(PostsPage);
