import React from "react";
import "./App.scss";
import Post from "./pages/Post";
import Footer from "./UI/Footer";
import Header from "./UI/Header";

function App() {
  return (
    <div className="top-container" >
    <Header/>
    <main>
      <Post/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
