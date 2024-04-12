import React,{useRef} from 'react'
import './contact.css'

import { FaFacebookSquare, FaTwitter, FaInstagramSquare, FaYoutubeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { TwitterIcon } from 'react-icons';


import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import insta from '../../assets/instagram.png';

import emailjs from '@emailjs/browser';


const Contacts = () => {
    const form = useRef();

  
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dqstvot', 'template_xjhe119', form.current, {
            publicKey: 'wTdY9McTi_ou7fKKg',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id='contactPage'>
       

        <div id='contact'>
        <div className='contactandlinks'>
            
            
            <div className='links'>
                <a href='https://github.com/NishantAhirao' target='_blank'><AiFillGithub  className='link'/></a>
                <a href='https://www.linkedin.com/in/nishant-ahirao-036a12220/' target='_blank'><FaLinkedin  className='link'/></a>
                <a href='https://x.com/AhiraoNishant01?t=wSO4jKKAgCYjvRIxrllZCQ&s=09' target='_blank'><i className="fa-brands fa-x-twitter link"></i></a>
               
                <a href='https://www.instagram.com/nishant_ahirao_001' target='_blank'><AiFillInstagram  className='link'/></a>
                <a href='https://youtube.com/@nishantahirao001?si=uxMaldouALrLOMhQ' target='_blank'><AiFillYoutube  className='link'/></a>
                     






                </div>
                <div>
                
                <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='your name' name='your_name' required></input>
                <input type='email' className='email' placeholder='your email' name='your_email' required></input>
                <textarea name='message' className='msg' rows='5' placeholder='your message' required></textarea>
                <button type='submit' value='Send'  className='submitBtn'>Submit</button>
              </form>
               
                </div>
                </div>

        </div>
    </section>
  )
}

export default Contacts
