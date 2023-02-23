import React from "react";
import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from './pages/NotFoundPage'
// import AboutPage from "./pages/AboutPage";

import Navbar from "./componentes/Navbar";
import Footer from './componentes/Footer'

function App() {
  return (
    <div className="App">

   
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/about" element={<AboutPage/>}/> */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
