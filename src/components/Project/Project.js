import React from 'react'
import './project.css'

import newHEREss from '../../assets/newsHEREss.png'
import todoss from '../../assets/todoss.png'
import TextCaseConverterss from '../../assets/textconverterss.png'


const Project = () => {

  const projectData = [
    {
      title:"newHERE-stay updated",
      img:newHEREss,
      description:"React-based web application that keeps you informed with the latest news. It leverages the News API.",
      gitLink:"https://github.com/NishantAhirao/newsHERE-stay-updated",
      demoLink:""
    },

    {
      title:"ToDo-List",
      img:todoss,
      description:"offers users a streamlined task management solution, enabling easy creation, tracking, and completion of tasks",
      gitLink:" https://github.com/NishantAhirao/-OASIS-level-2-Task-3-ToDo-List",
      demoLink:""
    },

    {
      title:"TextCaseConverter",
      img:TextCaseConverterss,
      description:"A very handy online text tool can change between lower and upper case, can capitalize, uncapitalize, convert to mix case and transform your text.",
      gitLink:" https://github.com/NishantAhirao/TextCaseConverter",
      demoLink:""
    },



  ];

  return (
    <section id='projects'>
        <p className='projectsIntro'>Browse My Recent</p>
        <h1 className='projectsTitle'>Projects</h1>
        
          <div className='details-container'>
         
            
          {projectData.map((item, index)=>(
                        <div className='article'> 
                      <img src={item.img} alt='' className='projectImg'/>
                      <h3 className='projectHeading'>{item.title}</h3>
                      <p className='projDesc'>  {item.description}</p>

                      <div className='projectBtns'>

                      <a href={item.gitLink} target="_blank" rel="noopener noreferrer"><button className='projectBtn' ><i className="uil uil-github unicons"></i>GitHub</button></a>

                      <a href={item.demoLink} target="_blank" rel="noopener noreferrer"><button className='projectBtn'><i className="uil uil-desktop unicons"></i>Demo</button></a>
                      </div>
              </div>

                      
                  ))

                  }
                  
                  </div>
                 
                
              

          
          
          {/* <img src={Portfolio2} alt=''className='worksImg'></img>
          <img src={Portfolio3} alt=''className='worksImg'></img>
          <img src={Portfolio4} alt=''className='worksImg'></img>
          <img src={Portfolio5} alt=''className='worksImg'></img>
          <img src={Portfolio6} alt=''className='worksImg'></img> */}

    </section>
  )
}

export default Project
