import React from "react";
import "./Course.css";
import { Button } from "react-bootstrap";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin5Line } from "react-icons/ri";
function Course(props) {
  const { details, updateCourse, deleteCourse, className } = props;
  const { id, name, status } = details;
  const updateCourseDetails = () => {
    updateCourse({
      id,
      name,
      status:2
    });
  };
  return (
    <div className={`d-flex course ${className}`}>
      <div className={`title  ${status === 2 ? "line-through" : ""}`}>
        {name}
      </div>
      {/* <button className="btn btn-primary">Edit</button> */}
      <Button variant="primary"  onClick={updateCourseDetails}>
        <VscEdit />
        Edit
      </Button>
      {/* <button className="btn btn-danger">Delete</button> */}
      <Button variant="danger" onClick={()=>{
        deleteCourse(id);
      }}>
        <RiDeleteBin5Line />
        Delete
      </Button>
    </div>
  );
}
export default Course;
