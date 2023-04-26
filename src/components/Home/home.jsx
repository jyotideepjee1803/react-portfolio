import React,{useEffect} from "react";
import './home.css';
import Typewriter from "typewriter-effect";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import {TbArrowBigRightLines, TbChevronsDown} from 'react-icons/tb';

import Aos from 'aos';
import 'aos/dist/aos.css'

function Home(){

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <section id="home" className="home section">
            {/* visible at wider screen */}
            <div className="leftIcons">
                <div className="socials grid">
                    <a href="https://github.com/jyotideepjee1803" target="_blank" rel="noreferrer">
                        <AiFillGithub className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jyotideep-acharjee-43b7361a6/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin className="icon"/>
                    </a>
                    <a href="https://www.instagram.com/jy.oti.de.ep/" target="_blank" rel="noreferrer">
                        <BsInstagram className="icon"/>
                    </a>
                    <div className="line"></div>
                </div>
            </div>

            <div className="container homeContainer">
                <span className="introText">
                    Hi my name is,
                </span>
                <h1 className="title">
                    Jyotideep Acharjee
                </h1>
                <h2 className="subTitle">
                    I am a <span className="anitext"><Typewriter
                    textStyle={{
                        color: '#05eaff',
                    }}
                    options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        "Programmer.",
                        "Web Developer.",
                        "Tech Enthusiast."
                    ]
                    }}
                /></span>
                </h2>
                <div className="lowerHomeSection">
                    <button className="contactBtn">
                        <a href="#contact" className="flex">
                            Contact Me <TbArrowBigRightLines className="icon"/>
                        </a>
                    </button>

                    <div className="scrollDiv">
                        <a href="#about" className="flex">
                           <h6 className="scroll">Scroll Down </h6> <TbChevronsDown className="icon"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* visible at wider screen */}
            <div className="rightEmail">
                <div>
                    <div className="emailAddress">
                        <a href="https://mailto:b121022@iiit-bh.ac.in" target="_blank" rel="noreferrer">jyotideepjee@gmail.com</a>
                    </div>

                    <div className="line"></div>
                </div>
            </div>
        </section>
    )
}

export default Home;