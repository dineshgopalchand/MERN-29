import React from "react";
import "./Course.css";
import { Button } from "react-bootstrap";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin5Line } from "react-icons/ri";
function Course(props) {
  const { id, name, status } = props.details;
  return (
    <div className="d-flex course">
      <div className="title">{name}</div>
      {/* <button className="btn btn-primary">Edit</button> */}
      <Button variant="primary">
        <VscEdit  />
        Edit
      </Button>
      {/* <button className="btn btn-danger">Delete</button> */}
      <Button variant="danger">
        <RiDeleteBin5Line />
        Delete
      </Button>
    </div>
  );
}
export default Course;
