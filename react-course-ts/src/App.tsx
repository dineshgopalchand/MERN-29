import { Navigate, Route, Routes } from "react-router";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import UserLayout from "./layouts/UserLayout";
import About from "./pages/About";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import GitFollower from "./pages/GitFollower";
import GitProfile from "./pages/GitProfile";
import GitUser from "./pages/GitUser";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Profile from "./pages/Profile";

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
          <Route path="user" element={<UserLayout />}>
            <Route index element={<Navigate to="./profile" />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="account" element={<Account />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
