import React, { useState } from 'react';
import './project.css';

import newHEREss from '../../assets/newsHEREss.png';
import todoss from '../../assets/todoss.png';
import TextCaseConverterss from '../../assets/textconverterss.png';

import { AiOutlineCloseCircle } from 'react-icons/ai';

const Project = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openVideoModal = (url) => {
    setVideoUrl(url);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setVideoUrl('');
  };

  const projectData = [
    {
      title: "newHERE-stay updated",
      img: newHEREss,
      description: "React-based web application that keeps you informed with the latest news. It leverages the News API.",
      gitLink: "https://github.com/NishantAhirao/newsHERE-stay-updated",
      demoLink: "https://www.youtube.com/embed/ehdgt_pBfP4?si=plTZchcJkdqBpf4y",
      tags: ["React.js", "news.api", "HTML", "CSS", "bootstrap"]
    },
    {
      title: "ToDo-List",
      img: todoss,
      description: "Offers users a streamlined task management solution, enabling easy creation, tracking, and completion of tasks.",
      gitLink: "https://github.com/NishantAhirao/-OASIS-level-2-Task-3-ToDo-List",
      demoLink: "https://www.youtube.com/embed/KtMt1CfHOdg?si=FtpIAbZPK_a_avK2", 
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "TextCaseConverter",
      img: TextCaseConverterss,
      description: "online text tool that can change between lower & upper case, can capitalize, uncapitalize, convert to mix case and transform your text.",
      gitLink: "https://github.com/NishantAhirao/TextCaseConverter",
      demoLink: "https://www.youtube.com/embed/byD0TMZVpSM?si=NA26oJupU7Vn9fir", 
      tags: ["React.js", "HTML", "CSS", "JavaScript", "bootstrap"]
    }
  ];

  return (
    <section id='projects'>
      <p className='projectsIntro'>Browse My Recent</p>
      <h1 className='projectsTitle'>Projects</h1>
      <div className='details-container'>
        {projectData.map((item, index) => (
          <div className='article' key={index}>
            <div className='imgcontainer'>

            <img src={item.img} alt='' className='projectImg' />
            </div>

            <div className='project-info-container'>

            <h3 className='projectHeading'>{item.title}</h3>
            <p className='projDesc'>{item.description}</p>

            <div className='projectTags'>
      {item.tags.map((tag, idx) => (
        <span key={idx} className='projectTag'>{tag}</span>
      ))}
    </div>
            <div className='projectBtns'>
              <a href={item.gitLink} target="_blank" rel="noopener noreferrer">
                <button className='projectBtn'><i className="uil uil-github unicons"></i>GitHub</button>
              </a>
              {item.demoLink && (
                <button className='projectBtn' onClick={() => openVideoModal(item.demoLink)}>
                  <i className="uil uil-play-circle unicons"></i>Watch Demo
                </button>
              )}
            </div>
              </div>
          </div>
        ))}
      </div>
      {showVideoModal && (
        <div className="video-modal-overlay">
          <div className="video-modal">
            <button className="close-modal-btn" onClick={closeVideoModal}><AiOutlineCloseCircle /></button>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;