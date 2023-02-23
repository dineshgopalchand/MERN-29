import "./App.css";
import Courses from "./Courses";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./layout/MainLayout";
import ContactForm from "./ContactForm";
import SignUp from "./SignUp";
function App() {
  return (
    <div className="App">
      {/* <h1>My First React App.</h1>
      <Courses /> */}
      <MainLayout>
        {/* <Courses /> */}
        {/* <ContactForm/> */}
        <SignUp/>
      </MainLayout>
    </div>
  );
}

export default App;
