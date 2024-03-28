import React , {useEffect} from "react";
import "./about.css";
import { TbCloudDownload } from "react-icons/tb";
import {SiCodeforces,SiLeetcode} from "react-icons/si"
import dp from '../../assets/profile.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <section id="about" className="about section container">
           <div data-aos ="fade-right" className="sectionTitle">
                <span className="titleNumber">01.</span>
                <h5 className="titleText">About Me
                <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="sectionContent grid">
                <div data-aos ="fade-up" className="textSection">
                    <h4>
                       I am a sophomore undergraduate Computer Science Engineering 
                       student at International Institute of Information Technology,
                       Bhubaneswar(India). I am deeply interested in competitive 
                       programming with strong fundamentals of C++;
                       <br />
                       I also have interest in web development and currently working on
                       MERN stack projects.
                    </h4>
                    <div className="profileGroup grid">
                    <div data-aos = "fade-up" data-aos-duration="4000" className="generalProfile">
                        <div className="singleProfile">
                            <div className="iconBox flex">
                            <a href="https://codeforces.com/profile/DraggerJd03" target="_blank" rel="noreferrer">
                                <SiCodeforces className="icon"/>
                            </a>
                            </div>
                        </div>

                        <div className="singleProfile">
                            <div className="iconBox flex">
                            <a href="https://leetcode.com/jyotideepjee/" target="_blank" rel="noreferrer">
                                <SiLeetcode className="icon"/>
                            </a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div data-aos ="fade-up" data-aos-duration="3000" className="aboutBtn">
                        <a href="https://drive.google.com/file/d/1RNcYTt6CyirTo755K2FzQrfmC9Knz_yF/view?usp=sharing" download="CV.pdf" target="_blank" rel="noreferrer" className="flex">
                            Download CV <TbCloudDownload className="icon"/>
                        </a>
                    </div>
                </div>

                <div data-aos ="fade-up" data-aos-duration="3500" className="aboutImgDiv">
                    <img src={dp} alt="Jyotideep" className="aboutImg" />
                </div>
            </div>
        </section>
    )
}

export default About;