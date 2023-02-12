import React, { useState } from "react";
import Course from "./Course";
const coursesList = [
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

const Courses = () => {
  const title = "Course List";
  const [courseList, setCourseList] = useState(coursesList);
  const [newCourse, setNewCourse] = useState("");
  const inputChangeHandler = (event) => {
    const value = event.target.value;
    setNewCourse(value);
  };
  const addCourse = (event) => {
    event.preventDefault();
    // console.log(newCourse);
    // const cList=[...courseList];
    // cList.push({
    //   id:Date.now(),
    //   name:newCourse,
    //   status:0
    // })
    // setCourseList(cList);
    setCourseList((prev) => {
      return [
        {
          id: Date.now(),
          name: newCourse,
          status: 0,
        },
        ...prev,
      ];
    });
    setNewCourse("");
  };
  const deleteCourse = (id) => {
    setCourseList((prev) => {
      return prev.filter((course) => course.id !== id);
    });
  };
  const updateCourse = (courseDetail) => {
    // setCourseList((prevCourseList) => {
    //   const latestCourseList = [...prevCourseList];
    //   const courseIndex = latestCourseList.findIndex(
    //     (course) => course.id === courseDetail.id
    //   );
    //   latestCourseList.splice(courseIndex, 1, courseDetail);
    //   console.log(latestCourseList);
    //   return latestCourseList;
    // });
    setCourseList((prevCourseList) => {
      return prevCourseList.map((course) => {
        if (course.id === courseDetail.id) {
          return courseDetail;
        } else {
          return course;
        }
      });
    });
  };
  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={addCourse}>
        <div className="form-group inline-form-block mx-3">
          <input
            type="text"
            value={newCourse}
            className="form-control"
            placeholder="Add new course"
            name="newcourse"
            onChange={inputChangeHandler}
          />
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
      {courseList.map((item,index) => {
        return (
          <Course
            details={item}
            updateCourse={updateCourse}
            deleteCourse={deleteCourse}
            key={item.id}
            className={`${index%2===0?'light-color':''}`}
          ></Course>
        );
      })}
    </>
  );
};

export default Courses;
