import React from "react";
import "./Course.css";
function Course(props) {
  const { id, name, status } = props.details;
  return (
    <div className="d-flex course">
      <div className="title">{name}</div>
      <button className="btn-primary">Edit</button>
      <button className="btn-danger">Delete</button>
    </div>
  );
}
export default Course;
