import React, { useState, useEffect } from "react";
import PostItem from "../features/post/PostItem";
import getData from '../utils/fetch'


const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3029/posts")
    //   .then((res) => (res.ok ? res.json() : []))
    //   .then((posts) => {
    //     setPosts(posts);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const fetchData = async () => {
      //   try {
      //     const postList = await fetch("http://localhost:3029/postsss").then(
      //       (res) => res.json()
      //     );
      //     console.log(postList);

      //     setPosts(postList);
      //   } catch {
      //     setPosts([]);
      //   }
      const postList = await getData("http://localhost:3029/posts");
      setPosts(postList);
    };
    fetchData();
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
