import React,{useEffect} from "react";
import './skill.css';
import {TbBrandReact, TbBrandCpp} from "react-icons/tb"
import {IoLogoJavascript, IoLogoSass} from "react-icons/io"
import {SiHtml5, SiCss3, SiBootstrap, SiNodedotjs, SiExpress, SiFirebase} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills(){

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])


    return (
        <section id="skills" className="skills container section">
            <div data-aos = "fade-right" className="sectionTitle">
                <span className="titleNumber">02.</span>
                <h5 className="titleText">Skills
                <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="skillsContainer grid">
                <div className="skillGroup grid">
                    <div data-aos = "fade-up" data-aos-duration="3000" className="skillDesc">
                        <div className="row"><h4>An individual eager to learn and explore new fields of life and technology. A team player with good listening skills and fast learning ability.</h4></div>
                        <div data-aos = "fade-up" data-aos-duration="3000" className="skillCard row">
                            <h4>INTERESTS</h4>
                            <ul>
                                <li>Competitive Programming</li>
                                <li>Web Development</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div data-aos = "fade-up" data-aos-duration="4000" className="generalSkills">
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <TbBrandCpp className="icon"/>
                            </div>
                            <span className="skillName">C++</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiHtml5 className="icon"/>
                            </div>
                            <span className="skillName">HTML</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiCss3 className="icon"/>
                            </div>
                            <span className="skillName">CSS</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiBootstrap className="icon"/>
                            </div>
                            <span className="skillName">Bootstrap</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoJavascript className="icon"/>
                            </div>
                            <span className="skillName">JavaScript</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <TbBrandReact className="icon"/>
                            </div>
                            <span className="skillName">React</span>
                        </div>


                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiNodedotjs className="icon"/>
                            </div>
                            <span className="skillName">Node</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiExpress className="icon"/>
                            </div>
                            <span className="skillName">Express</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <GrMysql className="icon"/>
                            </div>
                            <span className="skillName">MySQL</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiFirebase className="icon"/>
                            </div>
                            <span className="skillName">Firebase</span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoSass className="icon"/>
                            </div>
                            <span className="skillName">Sass</span>
                        </div>

                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default Skills;