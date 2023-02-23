import React, { useState } from "react";
import Card from "./Card";
import Course from "./Course";
import AddCourse from "./features/AddCourse";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";

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
  const [showAddForm, setShowForm] = useState(false);

  const addCourse = (newCourse) => {
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
  };
  const deleteCourse = (id) => {
    setCourseList((prev) => {
      return prev.filter((course) => course.id !== id);
    });
  };
  const updateCourse = (courseDetail) => {
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
  const courseListElement = courseList.map((item, index) => {
    return (
      <div key={item.id} className=" col-sm-12 col-md-6 col-lg-3 col-xl-2 mb-1">
        <Card title={item.name}>
          <div>
            <p>
              {item.name}: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Sequi, aperiam?
            </p>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={(event) => updateButtonHandler(event, item)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={(event) => {
                event.stopPropagation();
                deleteCourse(item.id);
              }}
            >
              Delete
            </button>
          </div>
        </Card>
      </div>
    );
  });
  const updateButtonHandler = (event, item) => {
    event.stopPropagation();
    updateCourse(item);
  };
  const showFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };
  return (
    <>
      <h3>
        {title}{" "}
        <span onClick={showFormHandler}>
          {!showAddForm ? <IoMdAddCircleOutline /> : <AiOutlineMinusCircle />}
        </span>
      </h3>
      {/* {showAddForm ? <AddCourse addCourse={addCourse} /> : ""} */}
      {showAddForm && <AddCourse addCourse={addCourse} /> }

      {courseList.length > 0 ? (
        <div className="row my-3 mx-2">{courseListElement}</div>
      ) : (
        <h2>No Course Available</h2>
      )}
    </>
  );
};

export default Courses;
