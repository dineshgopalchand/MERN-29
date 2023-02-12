import "./App.css";
import Courses from "./Courses";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <div className="App">
      {/* <h1>My First React App.</h1>
      <Courses /> */}
      <MainLayout>
        <Courses />
      </MainLayout>
    </div>
  );
}

export default App;
