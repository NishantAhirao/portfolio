"use client";

import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { Link } from 'react-scroll'

import { RiSchoolLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import { RiBankLine } from "react-icons/ri";
// import { FaGraduationCap } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";

// import { GiTrophyCup } from 'react-icons/gi'; // Trophy Icon

import { RiCodeSSlashLine } from "react-icons/ri"; // Code Icon

import "./about.css";

const About = () => {
  const [showAbout, setShowAbout] = useState("experience");
  const [key, setKey] = useState(0); // Key to trigger re-rendering and animation

  const certificationsData = [
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      location: "Amazon Web Services (AWS)",
      description: (
        <>
          Validated foundational knowledge of AWS Cloud, including core services
          (EC2, S3, RDS, IAM, VPC), cloud architecture principles, security,
          networking, pricing models, and the AWS Well-Architected Framework.
          <br />
          <a
            href="https://drive.google.com/file/d/1V0iV7CNLMbwkfK0iyHxOMmT7VDDbGjsA/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </>
      ),
      icon: <FaAws />,
      date: "Aug 2025",
    },
    {
      title: "Machine Learning Specialization",
      location: "Stanford University & DeepLearning.AI (Coursera)",
      description: (
        <>
          Completed Andrew Ng's Machine Learning Specialization covering
          supervised & unsupervised learning, neural networks, decision trees,
          recommendation systems, clustering, anomaly detection, and practical
          ML model development using Python.
          <br />
          <a
            href="https://drive.google.com/file/d/1GcPY5d99aAQ9ZFVnzHtE1av3JIdEBdz7/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </>
      ),
      icon: <SiCoursera />,
      date: "Oct 2024",
    },
  ];

  const eduData = [
    {
      title: "10th (SSC) from MSBSHSE",
      location:
        "Shree Shiv Chhatrapati Shivaji Raje, Madhyamik vidyalaya, Chinchwad, Pune",
      description: "Percentage: 95 / 100",
      icon: <RiSchoolLine />,
      date: "2018",
    },

    {
      title: "12th (HSC) from MSBSHSE",
      location: "Smt. K. J. Gupta Jr. college, Chinchwad, Pune",
      description: "Percentage: 90.92 / 100",
      icon: <RiBankLine />,
      date: "2020",
    },
    {
      title: "B.E. - Computer Engineering ",
      location: "Dr. D. Y. Patil Institute of Technology, Pimpri, Pune",
      description: "CGPA: 8.92 / 10",
      icon: <LuGraduationCap></LuGraduationCap>,
      date: "2020 - 2024",
    },
  ];

  const exData = [
    {
      title: "Tata Consultancy Services (TCS BaNCS) - Mumbai, India",
      location: "Backend Software Developer",
      description: (
        <div>
          <p>
            <strong>Key Skills:</strong> Java (8 & 21), Spring Boot, Spring Data
            JPA, JDBC, PL/SQL, Oracle, REST APIs, Microservices, Linux,
            Multithreading, NSDL/CDSL, Payment Gateway Integrations.
            <br />
            • Designed and delivered scalable RESTful microservices for
            securities trading, banking, settlement, and depository operations,
            enabling MCX, NSE Commodity, NCDEX, EGR, and MSE trading while
            integrating NSDL/CDSL, banking partners, and payment gateways.
            <br />
            • Led end-to-end delivery of the MCX Commodity Trading integration,
            developed critical holdings, funds, payout, and settlement APIs,
            optimized PL/SQL and migrated services from Java 8 to Java 21,
            delivering a zero-critical-defect production go-live.
            <br />• Improved FO-BO payout performance by **~70% (45s → 13s)**
            using multithreading, automated development workflows reducing setup
            time from **2+ hrs to less than 1 hr**, and managed Linux
            deployments, production releases, and end-to-end SDLC activities.
          </p>
        </div>
      ),
      icon: <RiCodeSSlashLine />,
      date: "Jan 2025 - Present",
    },
  ];

  const handleEducationClick = () => {
    setShowAbout("education");
    setKey((prevKey) => prevKey + 1); // Increment key to trigger re-rendering
  };

  const handleCertificationsClick = () => {
    setShowAbout("certifications");
    setKey((prevKey) => prevKey + 1); // Increment key to trigger re-rendering
  };

  const handleExperienceClick = () => {
    setShowAbout("experience");
    setKey((prevKey) => prevKey + 1); // Increment key to trigger re-rendering
  };

  const timelineData =
    showAbout === "education"
      ? eduData
      : showAbout === "experience"
        ? exData
        : certificationsData;

  return (
    <section id="AboutMe">
      <p className="headingIntro">Get to Know More</p>
      <h1 className="aboutHeading">About Me</h1>
      <span className="skillDesc">
        I am Nishant Ahirao. Currently Working as Backend Software Developer @
        TCS. Experienced in designing and optimizing RESTful microservices using
        Java and Spring Boot for financial trading systems, with strong
        expertise in scalable system design and API performance optimization. I
        am just starting my coorporect journey with this small step.
      </span>
      <div className="aboutBtns">
        <button
          className={`aboutBtn ${showAbout === "experience" ? "active" : ""}`}
          onClick={handleExperienceClick}
        >
          <i className="uil uil-award unicons"></i>Experience
        </button>

        <button
          className={`aboutBtn ${showAbout === "certifications" ? "active" : ""}`}
          onClick={handleCertificationsClick}
        >
          <i className="uil uil-trophy unicons"></i>Certifications
        </button>

        <button
          className={`aboutBtn ${showAbout === "education" ? "active" : ""}`}
          onClick={handleEducationClick}
        >
          <i className="uil uil-book-open unicons"></i>Education
        </button>
      </div>

      <h1 className="aboutHeading2">
        {showAbout === "education"
          ? "My Education"
          : showAbout === "certifications"
            ? "My Certifications"
            : "My Experience"}
      </h1>

      <VerticalTimeline lineColor="rgba(0,0,0,0.14)">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            position={
              showAbout === "education" || showAbout === "certifications"
                ? undefined
                : "right"
            }
            contentStyle={{
              border: "1px solid rgba(0,0,0,0.05)",
              textAlign: "left",
              padding: "1rem 2rem",
              borderRadius: "1rem",
              boxShadow:
                "0px 3px 1px -2px rgba(11,11,11,.2),0px 2px 2px rgba(0,0,0,.14),0px 1px 5px rgba(0,0,0,.12)",
            }}
            contentArrowStyle={{
              borderRight: "0.5rem solid rgba(0,0,0,0.14)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
            }}
          >
            <h3 style={{ margin: 0, fontWeight: 400 }}>{item.title}</h3>

            <p style={{ margin: 0, fontWeight: 300, fontSize: "0.9rem" }}>
              {item.location}
            </p>

            <p style={{ margin: 0, fontSize: "0.9rem" }}>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default About;
