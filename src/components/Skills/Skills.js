import React from 'react'
import './skills.css'

import { SiPowerbi } from 'react-icons/si';


import reacticon from '../../assets/react.png'
import cppicon from '../../assets/c-.png'
import powericon from '../../assets/Power-BI.png'
import javaicon from '../../assets/java.png'
import pythonicon from '../../assets/python.png'
import htmlicon from '../../assets/html-5.png'
import cssicon from '../../assets/css-3.png'
import mysqlicon from '../../assets/mySQL.png'
import jsicon from '../../assets/js.png'
import sqlicon from '../../assets/sql-server.png'
import probsol from '../../assets/problem-solving-skills.png'
import frontendicon from '../../assets/frontend.png'

const Skills = () => {

  const skillsData = [
    { skill: "C++", icon: <img className='skillsIcons' src={cppicon} alt="cpp"/> },
    { skill: "Python", icon: <img className='skillsIcons' src={pythonicon} alt="python"/> },
    { skill: "Java", icon: <img className='skillsIcons' src={javaicon} alt="js"/> },
    { skill: "Power BI", icon: <img className='skillsIcons' src={powericon} alt="powerBI"/> },
    { skill: "SQL", icon: <img className='skillsIcons' src={sqlicon} alt="sql"/> },
    { skill: "mySQL", icon: <img className='skillsIcons' src={mysqlicon} alt="mySQL"/> },
    { skill: "Front-End Web Development", icon: <img className='skillsIcons' src={frontendicon} alt="frontend"/>},
    { skill: "Problem Solving", icon: <img className='skillsIcons' src={probsol} alt="problem-solving"/> },
    { skill: "HTML5", icon: <img className='skillsIcons' src={htmlicon} alt="html"/>},
    { skill: "CSS", icon: <img className='skillsIcons' src={cssicon} alt="css"/>},
    { skill: "Javascript", icon: <img className='skillsIcons' src={jsicon} alt="js"/>  },
    { skill: "ReactJS", icon: <img className='skillsIcons' src={reacticon} alt="reacticon"/> },
  ];


  return (
    <section id='skills'>
      <h2 className='skillsTitle '>My Skills</h2>
      <ul className='mySkillsList '>
        {
          skillsData.map((item, index)=>(
            <li key={index} className='singleSkill'>{item.icon}{item.skill}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills
