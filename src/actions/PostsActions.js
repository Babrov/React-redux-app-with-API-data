export const FETCH_POSTS = "FETCH_POSTS";
export const ADD_POST = "ADD_POST";
const postsApi = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => (dispatch) => {
    fetch(postsApi)
        .then((res) => res.json())
        .then((posts) =>
            dispatch({
                type: FETCH_POSTS,
                payload: { posts },
            })
        );
};

export const addPost = (postObj) => (dispatch) => {
    fetch(postsApi, {
        method: "POST",
        body: JSON.stringify(postObj),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((newPost) =>
            dispatch({
                type: ADD_POST,
                payload: { newPost },
            })
        );
};
