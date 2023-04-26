import React,{useEffect} from "react";
import './projects.css';
import img from '../../assets/Blogging_home.png';
import img2 from '../../assets/Tours.png';
import {FiGithub} from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css';

const data=[
    {
        id: 1,
        image: img,
        github: 'https://github.com/jyotideepjee1803/Blog_site',
        livelink: 'https://github.com/jyotideepjee1803/Blog_site',
        title: 'Blog Site',
        desc: 'Blog site desgined for the users to contribute their thoughts and read other blogs',
        tech1: 'Node',
        tech2: 'Express',
        tech3: 'Javascript',
        tech4: ''
    },
    {
        id: 2,
        image: img2,
        github: 'https://github.com/jyotideepjee1803/Tours_travels_template',
        livelink: 'https://jyotideep-tour-design.netlify.app/',
        title: 'Tours and Travels',
        desc: 'Tours and Travels site frontend design',
        tech1: 'ReactJS',
        tech2: 'Sass',
        tech3: 'Javascript',
        tech4: 'HTML CSS'
    },
    // {
    //     id: 3,
    //     image: img,
    //     github: 'https://github.com/jyotideepjee1803/Blog_site',
    //     livelink: '',
    //     title: 'Blog Site',
    //     desc: 'Blog site desgined for the users to contribute their thoughts and read other blogs',
    //     tech1: 'Node',
    //     tech2: 'Express',
    //     tech3: 'Javascript',
    //     tech4: ''
    // }
]


function Projects(){
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <section id="projects" className="projects container section">
            <div data-aos = "fade-right" className="sectionTitle">
                <span className="titleNumber">03.</span>
                <h5 className="titleText">Projects
                <div className="underline"><span></span></div>
                </h5>
            </div>

            <div data-aos = "fade-up" className="projectContainer grid">
                {
                    data.map(({id,github,image,livelink,desc,title,tech1,tech2,tech3,tech4})=>{
                        return(
                            <div key={id} className="singleProject">
                                <div>
                                <div className="extlinks flex">
                                    <div className="githubIcon">
                                        <a href={github} target="_blank" rel="noreferrer" >
                                            <FiGithub className="icon"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="imgDiv">
                                    <a href={livelink} target="_blank" rel="noreferrer">
                                        <img src={image} alt={title}/>
                                    </a>
                                </div>

                                <div className="projectTitle">
                                    <h3>{title}</h3>
                                </div>

                                <div className="desc">
                                    {desc}
                                </div>

                                <div className="technologies flex">
                                    <small>{tech1}</small>
                                    <small>{tech2}</small>
                                    <small>{tech3}</small>
                                    <small>{tech4}</small>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects;