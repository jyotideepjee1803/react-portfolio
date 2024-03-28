import React,{useEffect} from "react";
import './projects.css';
import chatImg from '../../assets/Chat.png';
import cryptoImg from '../../assets/Crypto.png'
import tourImg from '../../assets/Tours.png';
import messyImg from '../../assets/Messy.png';
import {FiGithub} from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css';

const data=[
    {
        id: 1,
        image: messyImg,
        github: 'https://github.com/jyotideepjee1803/Messy',
        livelink: 'https://messy.vercel.app/',
        title: 'Messy',
        desc: 'A canteen coupon management system made with MERN stack to facilitate seamless management of meal coupons for both student and vendor as well as easy payment.',
        tech1: 'Node',
        tech2: 'Express',
        tech3: 'MongoDB',
        tech4: 'React',
        tech5: 'Razorpay'
    },
    {
        id: 2,
        image: chatImg,
        github: 'https://github.com/jyotideepjee1803/Baat',
        livelink: 'https://baat-chat-app.onrender.com',
        title: 'Baat',
        desc: 'MERN Stack Chat-app with features of one-to-one chatting, group chatting as well as share all types of document along with text',
        tech1: 'Node',
        tech2: 'Express',
        tech3: 'MongoDB',
        tech4: 'React',
        tech5: 'Socket.io'
    },
    {
        id: 3,
        image: cryptoImg,
        github: 'https://github.com/jyotideepjee1803/crypto_tracker',
        livelink: 'https://crypto-tracer-site.netlify.app/',
        title: 'Coin Tracer',
        desc: 'Crypto currency tracking application with visual graphs and charts for representing current statistics of different currencies',
        tech1: 'React',
        tech2: 'REST API',
        tech3: 'CSS',
    },
    {
        id: 4,
        image: tourImg,
        github: 'https://github.com/jyotideepjee1803/Tours_travels_template',
        livelink: 'https://jyotideep-tour-design.netlify.app/',
        title: 'Tours and Travels',
        desc: 'Tours and Travels site frontend design',
        tech1: 'ReactJS',
        tech2: 'Sass',
        tech3: 'Javascript',
        tech4: 'HTML CSS'
    },
    
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

            <div data-aos = "fade-up" className="projectContainer grid" title="Click to see live project">
                {
                    data.map(({id,github,image,livelink,desc,title,tech1,tech2,tech3,tech4,tech5})=>{
                        return(
                            <div key={id} className="singleProject">
                                <div>
                                <div className="extlinks flex" title="Click to see github repo">
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
                                    <small>{tech5}</small>
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