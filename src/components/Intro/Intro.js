import React from 'react'
import './intro.css'
// import bg from '../../assets/image.png'
import bg from '../../assets/Nishant_wobg01.png'
import btnImg from '../../assets/hireme.png'
import btnImg2 from '../../assets/file.png'

import { Link } from 'react-scroll'
const Intro = () => {
  const handleDownload = () => {
    
    const pdfUrl = 'https://drive.google.com/file/d/1yw4tyUr82x6znDh3iXmim8gTD8jCRHM4/view?usp=sharing';

    window.open(pdfUrl, '_blank');
  };

  return (
    <section id='intro'>
        <div className='IntroContent'>
            <span className='hello'>Hello,</span>
            <span className='IntroText'>I'm <span className='IntroName'>Nishant Ahirao</span> <br></br>website Designer</span>
            <p className='IntroPara'>pursuing bachelor's in computer engineering. Working on full stack / MERN development.</p>

            <div className='introBtns'>
            <Link><button className='btn' onClick={handleDownload}><img src={btnImg2} alt='Hire ME' className='btnImg'></img>Download Resume</button></Link>

            <Link to='contact' spy={true} smooth={true}  offset={-50} duration={500}><button className='btn'><img src={btnImg} alt='Hire ME' className='btnImg'></img>Hire Me</button></Link>
            </div>
        </div>
        <img src={bg} alt='' className='bg'></img>
    </section>
  )
}

export default Intro
