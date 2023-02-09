import "./App.css";
import Courses from "./Courses";
import parrotImg from "./assets/images/6-pink-parrot-png-images-download.png";

function App() {
  return (
    <div className="App">
      <h1>My First React App.</h1>
      <Courses />
      <img src={parrotImg} alt="Parrot" />
      <img
        src={require("./assets/images/6-pink-parrot-png-images-download.png")}
        alt="Parrot"
      />
    </div>
  );
}

export default App;
