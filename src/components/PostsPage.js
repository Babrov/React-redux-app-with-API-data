import "../styles/PostsPage.scss";

const PostsPage = ({ postList }) => {
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
};
export default PostsPage;
