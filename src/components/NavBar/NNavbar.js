import React, { useState, useEffect } from 'react';
import './navbar.css';

// import logo from '../../assets/NAlogo3.png';
// import contactImg from '../../assets/contact.png';
import menu from '../../assets/bars.svg';
import { Link } from 'react-scroll';

function NNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 780) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='webName'>NA</div>
      <div className='deskMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='deskMenuListItem'>Home</Link>

       
        
        <Link activeClass='active' to='AboutMe' spy={true} smooth={true} offset={10} duration={500} className='deskMenuListItem'>About</Link>

        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='deskMenuListItem'>Skills</Link>

        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='deskMenuListItem'>Projects</Link>
        
      </div>

      <Link className='deskMenuBtn' offset={-20} 
        to='contact' smooth={true} >
        <i className="uil uil-comment-alt unicons"></i>contact me
      </Link>

      {windowWidth < 780 && (
        <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      )}

      <div className='navMenu' style={{ display: showMenu && windowWidth < 780 ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={500} className='ListItem' onClick={() => setShowMenu(!showMenu)}>Home</Link>
        <Link activeClass='active' to='AboutMe' spy={true} smooth={true} offset={5} duration={500} className='ListItem' onClick={() => setShowMenu(!showMenu)}>About</Link>

        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(!showMenu)}>Skills</Link>


        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-10} duration={500} className='ListItem' onClick={() => setShowMenu(!showMenu)}>Projects</Link>
        
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={500} className='ListItem' onClick={() => setShowMenu(!showMenu)}>Contact</Link>
      </div>
    </nav>
  );
}

export default NNavbar;
