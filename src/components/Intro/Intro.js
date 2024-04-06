import React from 'react'
import './intro.css'
// import bg from '../../assets/image.png'
import bg from '../../assets/Nishant_wobg01.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id='intro'>
        <div className='IntroContent'>
            <span className='hello'>Hello,</span>
            <span className='IntroText'>I'm <span className='IntroName'>Nishant Ahirao</span> <br></br>website Designer</span>
            <p className='IntroPara'>pursuing bachelor's in computer engineering. Working on full stack / MERN development.</p>

            <Link><button className='btn'><img src={btnImg} alt='Hire ME' className='btnImg'></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt='' className='bg'></img>
    </section>
  )
}

export default Intro
