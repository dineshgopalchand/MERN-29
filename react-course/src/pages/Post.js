import React, { useState, useEffect } from "react";
import PostItem from "../features/post/PostItem";
import getData from "../utils/fetch";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isOnce = true;
    const fetchData = async () => {
    //   const postList = await getData("http://localhost:3029/posts");
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
  return (
    <div className="row mt-2">
      {posts.map((post) => (
        <div
          className="col-md-3 col-sm-6 col-xs-12 col-xl-2 mb-1"
          key={post.id}
        >
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default Post;
