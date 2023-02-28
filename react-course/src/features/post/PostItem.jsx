import React from "react";

const PostItem = ({post}) => {
  return (
    <div className="card w-100 h-100">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
         {post.body}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default PostItem;
