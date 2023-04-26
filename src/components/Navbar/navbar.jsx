import React, {useState} from "react";
import './navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
function Navbar(){
    const [active, setActive] = useState('navBar')

    //function to toggle navBar :
    function showNav(){
        setActive('navBar activeNavbar')
    }

    function hideNav(){
        setActive('navBar')
    }

    //add bgcolor to header
    const [activeHeader, setactiveHeader] = useState('header');
    const addBg = () =>{
        if(window.scrollY >= 10){
            setactiveHeader('header activeHeader');
        }else{
            setactiveHeader('header');
        }
    }

    window.addEventListener('scroll', addBg);
    return (
        <header className={activeHeader}>
            <div className="logoDiv">
                <h1 className="logo"><a href="#home">Jd.</a></h1>
            </div>

            <div className={active}>
                <ul className="navLists flex">

                    <li className="navItem">
                        <a href="#about" className="navLink">
                            <span className="headerNumber">1</span> <span>About</span>
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#skills" className="navLink">
                            <span className="headerNumber">2</span> <span>Skills</span>
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#projects" className="navLink">
                            <span className="headerNumber">3</span> <span>Project</span>
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#contact" className="navLink">
                            <span className="headerNumber">4</span> <span>Contact</span>
                        </a>
                    </li>

                    <button className="btn">
                            <a href="CV.pdf" download="CV">RESUME</a>
                    </button>
                </ul>

                <div onClick={hideNav} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>      
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon"/>
            </div>
        </header>
    )
}

export default Navbar;