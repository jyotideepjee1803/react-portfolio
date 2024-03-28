import React from "react";
import './app.css';
import About from "./components/About/about";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
const App = () =>{
    return (
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App;