import React, { useState } from "react";
import Card from "./Card";
import Course from "./Course";
import FormControl from "./UI/FormControl";
import FormGroup from "./UI/FormGroup";
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
  const [newCourse, setNewCourse] = useState("dddd");
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
    console.log(courseDetail);
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
        <FormGroup className="mx-3" name="new item form" title="some title">
          <FormControl
            type="text"
            value={newCourse}
            className="form-control"
            placeholder="Add new course"
            name="newcourse"
            onChange={inputChangeHandler}
          />
          <button className="btn btn-primary">Add</button>
        </FormGroup>
      </form>
      {/* {courseList.map((item,index) => {
        return (
          <Course
            details={item}
            updateCourse={updateCourse}
            deleteCourse={deleteCourse}
            key={item.id}
            className={`${index%2===0?'light-color':''}`}
          ></Course>
        );
      })} */}
      <div className="row my-3 mx-2">
        {courseList.map((item, index) => {
          return (
            <div
              key={item.id}
              className=" col-sm-12 col-md-6 col-lg-3 col-xl-2 mb-1"
            >
              <Card
                title={item.name}
                onClick={() => console.log("clicked Card element")}
              >
                <div>
                  <p>
                    {item.name}: Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Sequi, aperiam?
                  </p>
                  <p>
                    Fugit harum nihil rem nulla porro repellendus inventore eum
                    eveniet.
                  </p>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={(event) => {
                      event.stopPropagation();
                      updateCourse(item);
                    }}
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
        })}
      </div>
    </>
  );
};

export default Courses;
