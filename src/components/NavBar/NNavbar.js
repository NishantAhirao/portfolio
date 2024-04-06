import React, { useState } from 'react';
import './navbar.css';

import logo from '../../assets/NAlogo3.png'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

import {Link} from 'react-scroll';


function NNavbar() {

  const[showMenu, setShowMenu]= useState(false);
  

  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'></img>
      <div className='deskMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true}  offset={-100} duration={500} className='deskMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true}  offset={-50} duration={500} className='deskMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true}  offset={-50} duration={500} className='deskMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true}  offset={-50} duration={500} className='deskMenuListItem'>Client</Link>


      </div>

      <button className='deskMenuBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={contactImg} alt=''className='deskMenuImg'/>contact me
      </button>


      <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}></img>
      <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true}  offset={-20} duration={500} className='ListItem' onClick={()=>setShowMenu(!showMenu)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true}  offset={-20} duration={500} className='ListItem' onClick={()=>setShowMenu(!showMenu)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true}  offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true}  offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(!showMenu)}>Client</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true}  offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(!showMenu)}>Contact</Link>



      </div>


    </nav>
  )
}

export default NNavbar
