import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <NavBar />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
