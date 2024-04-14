import React from 'react'
import './intro.css'
// import bg from '../../assets/image.png'
import bg from '../../assets/Nishant_wobg01.png'
// import btnImg from '../../assets/hireme.png'
// import btnImg2 from '../../assets/file.png'

import { Link } from 'react-scroll'
const Intro = () => {
  const handleDownload = () => {
    
    const pdfUrl = 'https://drive.google.com/file/d/1yw4tyUr82x6znDh3iXmim8gTD8jCRHM4/view?usp=sharing';

    window.open(pdfUrl, '_blank');
  };

  return (
    <section id='intro'>
        

        
        <div className='IntroContent'>
          <div className='textCont'>

          
            <span className='hello'>Hello,</span>
            <span className='IntroText'>I'm <span className='IntroName'>Nishant Ahirao</span> <br></br>website Designer</span>
            <p className='IntroPara'>pursuing bachelor's in computer engineering. Working on full stack / MERN development.</p>
            </div>
            <div className='introBtns'>
              <Link to=''><button className='btn' onClick={handleDownload}><i className="uil uil-file-download-alt unicons"></i>Download CV</button></Link>

              <Link to='contact' spy={true} smooth={true}  offset={-50} duration={500}><button className='btn'><i className="uil uil-briefcase-alt unicons"></i>Hire Me</button></Link>
            </div>
            <div className='introBtns2'>
              <a href='https://www.linkedin.com/in/nishant-ahirao-036a12220/' target='_blank' rel="noreferrer"><i className="uil uil-linkedin unicons2"></i></a>
              <a href='https://github.com/NishantAhirao' target='_blank' rel="noreferrer"><i className="uil uil-github unicons2"></i></a>
            
            
            </div>
            
            
        </div>
        <div className='circle'>
        <img src={bg} alt='' className='bg'></img>
        </div>
        
    </section>
  )
}

export default Intro
