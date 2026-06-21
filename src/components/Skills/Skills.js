import React from "react";
import "./skills.css";

// import { SiPowerbi } from 'react-icons/si';

import reacticon from "../../assets/react.png";
import cppicon from "../../assets/c-.png";
import powericon from "../../assets/Power-BI.png";
import javaicon from "../../assets/java.png";
import pythonicon from "../../assets/python.png";
import htmlicon from "../../assets/html-5.png";
import cssicon from "../../assets/css-3.png";
import mysqlicon from "../../assets/mySQL.png";
import jsicon from "../../assets/js.png";
import sqlicon from "../../assets/sql-server.png";

// Backend
import springbooticon from "../../assets/spring-boot.png";
import springsecurityicon from "../../assets/spring-security.svg";
import restapiicon from "../../assets/rest-api.png";
import microservicesicon from "../../assets/microservice.png";
import jpaicon from "../../assets/jpa.svg";
import jdbcicon from "../../assets/database.png";

// Frontend
import bootstrapicon from "../../assets/bootstrap.png";

// Database & Cloud
import oracleicon from "../../assets/oracle.png";
import redisicon from "../../assets/redis.png";
import awsicon from "../../assets/aws.png";
import plsqlicon from "../../assets/plsql.png";

// Tools
import giticon from "../../assets/git.png";
import mavenicon from "../../assets/maven.png";
import postmanicon from "../../assets/postman.png";
import swaggericon from "../../assets/swagger.png";
import linuxicon from "../../assets/linux.png";

// CS Fundamentals
import multithreadingicon from "../../assets/multithreading.png";
import dsaicon from "../../assets/dsa.png";
import oopicon from "../../assets/oops.png";
import dbmsicon from "../../assets/database.png";
import osicon from "../../assets/operation-systems.png";
import networkicon from "../../assets/computer-networks.png";

// Domain
import tradingicon from "../../assets/trading.png";

import paymenticon from "../../assets/payment.png";

const Skills = () => {
  // const skillsData = [
  //   { skill: "C++", icon: <img className='skillsIcons' src={cppicon} alt="cpp"/> },
  //   { skill: "Python", icon: <img className='skillsIcons' src={pythonicon} alt="python"/> },
  //   { skill: "Java", icon: <img className='skillsIcons' src={javaicon} alt="js"/> },
  //   { skill: "Power BI", icon: <img className='skillsIcons' src={powericon} alt="powerBI"/> },
  //   { skill: "SQL", icon: <img className='skillsIcons' src={sqlicon} alt="sql"/> },
  //   { skill: "mySQL", icon: <img className='skillsIcons' src={mysqlicon} alt="mySQL"/> },
  //   { skill: "Front-End Web Development", icon: <img className='skillsIcons' src={frontendicon} alt="frontend"/>},
  //   { skill: "Problem Solving", icon: <img className='skillsIcons' src={probsol} alt="problem-solving"/> },
  //   { skill: "HTML5", icon: <img className='skillsIcons' src={htmlicon} alt="html"/>},
  //   { skill: "CSS", icon: <img className='skillsIcons' src={cssicon} alt="css"/>},
  //   { skill: "Javascript", icon: <img className='skillsIcons' src={jsicon} alt="js"/>  },
  //   { skill: "ReactJS", icon: <img className='skillsIcons' src={reacticon} alt="reacticon"/> },
  // ];

  const skillsData = [
    // Languages
    {
      skill: "Java",
      icon: <img className="skillsIcons" src={javaicon} alt="java" />,
    },

    // Backend
    {
      skill: "Spring Boot",
      icon: (
        <img className="skillsIcons" src={springbooticon} alt="spring-boot" />
      ),
    },
    {
      skill: "Microservices",
      icon: (
        <img
          className="skillsIcons"
          src={microservicesicon}
          alt="microservices"
        />
      ),
    },
    {
      skill: "REST APIs",
      icon: <img className="skillsIcons" src={restapiicon} alt="rest-apis" />,
    },
    {
      skill: "Spring Security",
      icon: (
        <img
          className="skillsIcons"
          src={springsecurityicon}
          alt="spring-security"
        />
      ),
    },
    {
      skill: "Spring Data JPA",
      icon: <img className="skillsIcons" src={jpaicon} alt="spring-data-jpa" />,
    },
    {
      skill: "JDBC",
      icon: <img className="skillsIcons" src={jdbcicon} alt="jdbc" />,
    },

    // Frontend
    {
      skill: "React",
      icon: <img className="skillsIcons" src={reacticon} alt="react" />,
    },
    {
      skill: "Bootstrap",
      icon: <img className="skillsIcons" src={bootstrapicon} alt="bootstrap" />,
    },
    {
      skill: "HTML5",
      icon: <img className="skillsIcons" src={htmlicon} alt="html5" />,
    },
    {
      skill: "CSS3",
      icon: <img className="skillsIcons" src={cssicon} alt="css3" />,
    },

    // Database & Cloud
    {
      skill: "Oracle",
      icon: <img className="skillsIcons" src={oracleicon} alt="oracle" />,
    },
    {
      skill: "PL/SQL",
      icon: <img className="skillsIcons" src={plsqlicon} alt="pl-sql" />,
    },
    {
      skill: "MySQL",
      icon: <img className="skillsIcons" src={mysqlicon} alt="mysql" />,
    },
    {
      skill: "Redis",
      icon: <img className="skillsIcons" src={redisicon} alt="redis" />,
    },
    {
      skill: "AWS",
      icon: <img className="skillsIcons" src={awsicon} alt="aws" />,
    },

    // Tools
    {
      skill: "Git",
      icon: <img className="skillsIcons" src={giticon} alt="git" />,
    },
    {
      skill: "Maven",
      icon: <img className="skillsIcons" src={mavenicon} alt="maven" />,
    },
    {
      skill: "Postman",
      icon: <img className="skillsIcons" src={postmanicon} alt="postman" />,
    },
    {
      skill: "Swagger",
      icon: <img className="skillsIcons" src={swaggericon} alt="swagger" />,
    },
    {
      skill: "Linux",
      icon: <img className="skillsIcons" src={linuxicon} alt="linux" />,
    },

    {
      skill: "Python",
      icon: <img className="skillsIcons" src={pythonicon} alt="python" />,
    },
    {
      skill: "C/C++",
      icon: <img className="skillsIcons" src={cppicon} alt="cpp" />,
    },
    {
      skill: "JavaScript",
      icon: <img className="skillsIcons" src={jsicon} alt="javascript" />,
    },
    {
      skill: "SQL",
      icon: <img className="skillsIcons" src={sqlicon} alt="sql" />,
    },

    // Concepts
    {
      skill: "Multithreading",
      icon: (
        <img
          className="skillsIcons"
          src={multithreadingicon}
          alt="multithreading"
        />
      ),
    },
    {
      skill: "DSA",
      icon: <img className="skillsIcons" src={dsaicon} alt="dsa" />,
    },
    {
      skill: "OOP",
      icon: <img className="skillsIcons" src={oopicon} alt="oop" />,
    },
    {
      skill: "DBMS",
      icon: <img className="skillsIcons" src={dbmsicon} alt="dbms" />,
    },
    {
      skill: "Operating Systems",
      icon: (
        <img className="skillsIcons" src={osicon} alt="operating-systems" />
      ),
    },
    {
      skill: "Computer Networks",
      icon: (
        <img
          className="skillsIcons"
          src={networkicon}
          alt="computer-networks"
        />
      ),
    },

    // Domain
    {
      skill: "Securities Trading",
      icon: (
        <img
          className="skillsIcons"
          src={tradingicon}
          alt="securities-trading"
        />
      ),
    },
    {
      skill: "Payment Gateways",
      icon: (
        <img className="skillsIcons" src={paymenticon} alt="payment-gateways" />
      ),
    },
  ];

  return (
    <section id="skills">
      <p className="skillsIntro">Here are some of</p>
      <h2 className="skillsTitle ">My Skills</h2>
      <ul className="mySkillsList ">
        {skillsData.map((item, index) => (
          <li key={index} className="singleSkill">
            {item.icon}
            {item.skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
