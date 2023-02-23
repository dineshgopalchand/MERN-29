import "./App.css";
import Courses from "./Courses";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./layout/MainLayout";
import ContactForm from "./ContactForm";
function App() {
  return (
    <div className="App">
      {/* <h1>My First React App.</h1>
      <Courses /> */}
      <MainLayout>
        {/* <Courses /> */}
        <ContactForm/>
      </MainLayout>
    </div>
  );
}

export default App;
