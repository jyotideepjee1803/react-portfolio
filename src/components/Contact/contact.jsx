import React,{ useRef, useEffect }  from "react";
import './contact.css';
import {BsInstagram} from "react-icons/bs";
import { TbArrowBigRightLines } from "react-icons/tb";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

//emailjs 
import emailjs from "emailjs-com";

import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact(){

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_i26ziq8', 'template_ytkjpnk', form.current, '7SrwpdlEFezf2Xj_m')
        e.target.reset() //reset form after submission
    };

    return (
        <section id="contact" className="contact section container">
            <div data-aos ="fade-right" className="sectionTitle">
                <span className="titleNumber">04.</span>
                <h5 className="titleText">Contact
                <div className="underline"><span></span></div>
                </h5>
            </div>

            <div data-aos="fade-up" className="contactContainer grid">
                <div className="socialContacts grid">
                    <h3>Contact me</h3>

                    <div className="cards grid">
                        <div className="card">
                            <div>
                                <AiFillLinkedin className="icon socialIcon"/>
                            </div>
                            <h4>LinkedIn</h4>
                            <span className="userName">
                                @Jyotideep Acharjee
                            </span>
                            <div>
                                <a href="https://www.linkedin.com/in/jyotideep-acharjee-43b7361a6/" className="flex" target="_blank" rel="noreferrer">
                                    Send Message
                                    <TbArrowBigRightLines className="icon"/>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <AiFillGithub className="icon socialIcon"/>
                            </div>
                            <h4>GitHub</h4>
                            <span className="userName">
                                @jyotideepjee1803
                            </span>
                            <div>
                                <a href="https://github.com/jyotideepjee1803" className="flex" target="_blank" rel="noreferrer">
                                    View
                                    <TbArrowBigRightLines className="icon"/>
                                </a>
                            </div>
                        </div>
                        
                        <div className="card">
                            <div>
                                <BsInstagram className="icon socialIcon"/>
                            </div>
                            <h4>Instagram</h4>
                            <span className="userName">
                                @jy.oti.de.ep
                            </span>
                            <div>
                                <a href="https://www.instagram.com/jy.oti.de.ep/" className="flex" target="_blank" rel="noreferrer">
                                    Send Message
                                    <TbArrowBigRightLines className="icon"/>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

                <div data-aos="fade-up" className="form grid">
                    <h3>Send me an email</h3>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Enter your name" name="name"/>
                        <input type="email" placeholder="Enter your email" name="email"/>
                        <textarea name="message" placeholder="Enter your message"></textarea>
                        <button className="formBtn" type="submit" name="submit">
                            Send Email
                        </button>                    
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;