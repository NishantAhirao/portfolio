"use client"

import React, {useState} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-scroll'


import { RiSchoolLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import { RiBankLine } from "react-icons/ri";
// import { FaGraduationCap } from "react-icons/fa";


// import { GiTrophyCup } from 'react-icons/gi'; // Trophy Icon

import { RiCodeSSlashLine } from 'react-icons/ri'; // Code Icon

import './about.css'

const About = () => {

    const [showAbout, setShowAbout] = useState(true);
    const [key, setKey] = useState(0); // Key to trigger re-rendering and animation

     const eduData = [
      
      
        {
          title: "10th (SSC) from MSBSHSE",
          location: "Shree Shiv Chhatrapati Shivaji Raje, Madhyamik vidyalaya, Chinchwad, Pune",
          description:
            "Percentage: 95 / 100",
          icon: <RiSchoolLine   />,
          date: "2018",
        },

        {
            title: "12th (HSC) from MSBSHSE",
            location: "Smt. K. J. Gupta Jr. college, Chinchwad, Pune",
            description:
              "Percentage: 90.92 / 100",
            icon: <RiBankLine />,
            date: "2020",
          },
        {
            title: "B.E. - Computer Engineering ",
            location: "Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
            description:
              "CGPA: 8.92 / 10",
            icon: <LuGraduationCap></LuGraduationCap>,
            date: "2020 - 2024",
          },
      ];

      const exData = [
      
        {
            title: "Campus Credentials",
            location: "Intern",
            description: (
                <div>
                    <p>
                    Key Skills: Aptitude, Problem Solving, Python, Communication Skills<br/>
                    <p></p>
                    -Worked on various Python concepts and given challenges.<br/>
                    -Learned about different technical and non-technical skills.<br/>
                    </p>
                   
                </div>
            ),
            icon: <RiCodeSSlashLine />,
            date: "Jan 2023 - Feb 2023",
          },
        

        {
          title: "Oasis Infobyte",
          location: "Web Development intern",
          description:(
            <div>
                <p>
                Key Skills: ReactJS, CSS, HTML5, Javascript<br />
                <p></p>
                 - Worked on building responsive UI.<br />
                 - Implemented JavaScript to get respective response for web.<br />
                 - Developed different web pages according to the given task.
                </p>
                
            </div>
        ),

          icon: <RiCodeSSlashLine  />,
          date: "Mar 2023 - Apr 2023",
        },

    
        
      ];

    
      
  
      const handleEducationClick = () => {
          setShowAbout(true);
          setKey(prevKey => prevKey + 1); // Increment key to trigger re-rendering
      };
  
      const handleExperienceClick = () => {
          setShowAbout(false);
          setKey(prevKey => prevKey + 1); // Increment key to trigger re-rendering
      };

  return (
    <section id='AboutMe'>
        

        
        <p className='headingIntro'>Get to Know More</p>
        <h1 className='aboutHeading'>About Me</h1>
        <span className='skillDesc'>I am Nishant Ahirao. Currently pursuing bachelor's degree in computer engineering. Working on full stack / MERN development. I am very
enthusiastic about learning new things in devWorld. I am just starting my development journey with this small step.</span>
<div className='aboutBtns'>
<button className={`aboutBtn ${showAbout ? 'active' : ''}`} onClick={handleEducationClick}>
    <i className="uil uil-book-open unicons"></i>Education
</button>
<button className={`aboutBtn ${!showAbout ? 'active' : ''}`} onClick={handleExperienceClick}>
    <i className="uil uil-award unicons"></i>Experience
</button>
            </div>

            <h1 className='aboutHeading2'>{showAbout ? 'My Education' : 'My Experience'}</h1>


            <VerticalTimeline key={key} lineColor='rgba(0,0,0,0.14)'>
                {showAbout ? eduData.map((item, index) => (
                    <VerticalTimelineElement key={index} 
                       
                    
                    contentStyle={{
                        // background:"#f3f4f6",
                        // boxShadow:"none",
                        
                        border:"1px solid rgba(0, 0, 0, 0.05)",
                        textAlign:"left",
                        padding:"1rem 2rem",
                        boxShadow: "0px 3px 1px -2px rgba(11, 11, 11, 0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                        borderRadius:"1rem",
                        
                        // width:"fit-content"

                    }}

                    contentArrowStyle={{
                        borderRight:"0.5rem solid rgba(0,0,0,0.14)",
                        
                    }}

                    date={item.date}
                    icon={item.icon}
                    
                    

                    iconStyle={{
                        background:"white",
                        fontSize:"1.5rem",
                        // border:"0.2rem solid red",
                       

                    }}
                    >
                       <h3 style={{ margin: '0', fontWeight: '400' }}>{item.title}</h3>

                        <p  style={{margin:"0", fontWeight:"300" }}>  {item.location}</p>
                        <p style={{margin:"0"}}>{item.description}</p>
                    </VerticalTimelineElement>
              
            )) : exData.map((item, index) => (
                <VerticalTimelineElement key={index} 
                    
                    contentStyle={{
                        // background:"#f3f4f6",
                        // boxShadow:"none",
                    
                        border:"1px solid rgba(0, 0, 0, 0.05)",
                        textAlign:"left",
                        padding:"1rem 2rem",
                        boxShadow: "0px 3px 1px -2px rgba(11, 11, 11, 0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                        borderRadius:"1rem",
                        // width:"fit-content"

                    }}

                    contentArrowStyle={{
                        borderRight:"0.5rem solid rgba(0,0,0,0.14)",
                        
                    }}

                    date={item.date}
                    icon={item.icon}
                    
                    

                    iconStyle={{
                        background:"white",
                        fontSize:"1.5rem",
                        // border:"0.2rem solid red",
                       

                    }}
                    >
                        <h3  style={{margin:"0", fontWeight:"400" }}>{item.title} </h3>
                        <p  style={{margin:"0", fontWeight:"300", fontSize:"0.9rem"}}>  {item.location}</p>
                        <p style={{margin:"0", fontSize:"0.9rem"}}>{item.description}</p>
                    </VerticalTimelineElement>
                
            ))}

        </VerticalTimeline>
        
    </section>

    
  )
}

export default About
