import { Outlet } from "react-router";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const MainLayout = () => {
  return (
    <div className="top-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
