import { Route, Routes } from "react-router";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GitFollower from "./pages/GitFollower";
import GitProfile from "./pages/GitProfile";
import GitUser from "./pages/GitUser";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/posts" element={<Post />}></Route>
          <Route path="/git-user" element={<GitUser />}></Route>
          <Route path="/git-user/:userId" element={<GitProfile />}></Route>
          <Route
            path="/git-user/:userId/followers"
            element={<GitFollower />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
