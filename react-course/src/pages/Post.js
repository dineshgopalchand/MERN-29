import React, { useEffect, useReducer } from "react";
import AddNewPost from "../features/post/AddNewPost";
import PostItem from "../features/post/PostItem";
import getData from "../utils/fetch";

const SET_POST = "setpost";
const ADD_POST = "addpost";
const REMOVE_POST = "removePost";
const postReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_POST:
      return payload;
    case ADD_POST:
      return [payload, ...state];
    case REMOVE_POST:
      return state.filter((post) => post.id !== payload.id);
    default:
      return state;
  }
};
const Post = () => {
  const [posts, dispatch] = useReducer(postReducer, []);

  useEffect(() => {
    let isOnce = true;
    const fetchData = async () => {
      const postList = await getData("/posts");
      dispatch({ type: SET_POST, payload: postList });
    };
    setTimeout(() => {
      if (isOnce) {
        fetchData();
      }
    });
    return () => {
      isOnce = false;
    };
  }, []);
  const addNewPost = async ({ title, body }) => {
    const newPost = {
      title,
      body,
      userId: 1,
    };
    const res = await getData("/posts", {
      method: "post",
      data: newPost,
    });
    dispatch({ type: ADD_POST, payload: res });
  };
  const deletePost = async ({ id }) => {
    await getData(`/posts/${id}`, {
      method: "delete",
    });
    dispatch({ type: REMOVE_POST, payload: { id } });
  };
  return (
    <>
      <h3>Post List</h3>
      <AddNewPost addNew={addNewPost} />
      <div className="row mt-2">
        {posts.map((post) => (
          <div
            className="col-md-3 col-sm-6 col-xs-12 col-xl-2 mb-1"
            key={post.id}
          >
            <PostItem post={post} deletePost={deletePost} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
