import React,{useRef} from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';

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
        <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>
            I have had the opportunity to work with a diverse group of companies.
Some of the notable companies I have worked with includes
            </p>
            
            <div className='clientImgs'>
                <img src={walmart} alt='walmart' className='clientImg'></img>
                <img src={adobe} alt='adobe' className='clientImg'></img>
                <img src={microsoft} alt='microsoft' className='clientImg'></img>
                <img src={facebook} alt='facebook' className='clientImg'></img>


            </div>
            
        </div>

        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='your name' name='your_name'></input>
                <input type='email' className='email' placeholder='your email' name='your_email'></input>
                <textarea name='message' className='msg' rows='5' placeholder='your message'></textarea>
                <button type='submit' value='Send'  className='submitBtn'>Submit</button>

                <div className='links'>
                    <img src={facebookIcon} alt='facebook' className='link'></img>
                    <img src={twitterIcon} alt='twitter' className='link'></img>
                    <img src={youtube} alt='youtube' className='link'></img>
                    <img src={insta} alt='instagram' className='link'></img>

                </div>

            </form>

        </div>
    </section>
  )
}

export default Contacts
