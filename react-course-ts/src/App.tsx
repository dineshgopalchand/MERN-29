import React from "react";
import "./App.scss";
import Post from "./pages/Post";
import ContextSample from "./topic/ContextSample";
import Footer from "./UI/Footer";
import Header from "./UI/Header";

function App() {
  return (
    <div className="top-container" >
    <Header/>
    <main>
      {/* <Post/> */}
      <ContextSample/>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
