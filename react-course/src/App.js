import "./App.css";
import { Course } from "./Course";
import Courses, { getSQRT } from "./Courses";

function App() {
  const sqrtVal = getSQRT(4);
  console.log(sqrtVal);
  return (
    <div className="App">
      <h1>My First React App.</h1>
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Courses />
    </div>
  );
}

export default App;
