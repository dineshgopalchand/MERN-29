import React, { useState, useEffect } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3029/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);
  return (
    <div className="row mt-2">
      {posts.map((post) => (
        // <div className="col-xs-12 col-md-6 col-lg-4">
        <div className="col-4 mb-1" key={post.id}>
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
