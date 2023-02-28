import "./App.css";
import Courses from "./Courses";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./layout/MainLayout";
import ContactForm from "./pages/ContactForm";
import SignUp from "./pages/SignUp";
import Post from "./pages/Post";
function App() {
  return (
    <div className="App">
      {/* <h1>My First React App.</h1>
      <Courses /> */}
      <MainLayout>
        {/* <Courses /> */}
        {/* <ContactForm/> */}
        {/* <SignUp/> */}
        <Post/>
      </MainLayout>
    </div>
  );
}

export default App;
