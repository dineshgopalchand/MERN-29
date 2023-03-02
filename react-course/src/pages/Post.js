import React, { useState, useEffect } from "react";
import AddNewPost from "../features/post/AddNewPost";
import PostItem from "../features/post/PostItem";
import getData from "../utils/fetch";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isOnce = true;
    const fetchData = async () => {
      const postList = await getData("/posts");
      setPosts(postList);
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
    setPosts((prevPost) => [res, ...prevPost]);
    // console.log(res);
  };
  const deletePost = async ({ id }) => {
    await getData(`/posts/${id}`, {
      method: "delete",
    });
    // console.log(res);
    setPosts((prevPost) => prevPost.filter((post) => post.id !== id));
    // console.log(res);
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
