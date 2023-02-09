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
// class Course extends React.Component {
//   constructor(props) {
//     super();
//     this.details = props.details;
//     // console.log(props);
//   }
//   render() {
//     return (
//       <div className="d-flex course">
//         <div className="title">{this.details.name}</div>
//         <button className="btn-primary">Edit</button>
//         <button className="btn-danger">Delete</button>
//       </div>
//     );
//   }
// }
export default Course;
