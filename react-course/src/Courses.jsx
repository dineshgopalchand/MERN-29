import React from "react";
import Course from "./Course";
const Courses = () => {
  const title = "Course List";
  const courseList = [
    {
      id: 1,
      name: "React",
      status: 1,
    },
    {
      id: 2,
      name: "HTML",
      status: 2,
    },
    {
      id: 3,
      name: "CSS",
      status: 2,
    },
    {
      id: 4,
      name: "JS",
      status: 2,
    },
    {
      id: 5,
      name: "NodeJS",
      status: 0,
    },
  ];
  return (
    <>
      <h3>{title}</h3>
      {courseList.map((item) => {
        return <Course details={item} key={item.id}></Course>;
      })}
    </>
  );
};

export default Courses;
