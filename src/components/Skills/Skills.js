import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
            <span className='skillTitle'>What I Do</span>
            
<div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>demo text</p>
                    </div>
                
            </div>

            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>Demo Text</p>
                    </div>
                
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2> App Design</h2>
                        <p> Demo Text</p>
                    </div>
                
            </div>
            
            </div>
    </section>
  )
}

export default Skills
