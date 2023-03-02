import React from "react";

const PostItem = ({ post, deletePost }) => {
  return (
    <div className="card w-100 h-100">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <button
          className="btn btn-danger"
          onClick={() => {
            deletePost(post);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
