import React from "react";
import "./MainLayout.css";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

function MainLayout(props) {
  return (
    <div className="top-container">
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
