import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-container'>
    <h3 className='abt-h3'>About Me</h3>
    <p>I’m <strong><i>Vaishnavi Rasalay</i></strong>, a passionate Frontend Developer who loves building responsive and interactive websites.
       With skills in <strong>React, JavaScript, HTML,CSS, and Java</strong> I focus on creating designs that are both 
       visually appealing and user-friendly.</p> 
       <p>Currently, I’m working at <strong>Cognizant</strong>, where I contribute to AI model training 
       by annotating images and preparing high-quality datasets — helping technology see and understand the world better.</p>
       <h3 className='abt-h3'>Skills/Strengths Summary</h3>
       <ul>
        <li>⚡ React.js and JavaScript expertise</li>
        <li>🎨 Strong understanding of HTML5 & CSS3</li>
        <li>📱 Responsive design & cross-browser compatibility</li>
        <li>🧩 Problem-solving and attention to detail</li>
       </ul>
       <p>Apart from coding, I enjoy reading books, exploring new technologies, 
        and creating small creative projects in my free time.</p>
        <div className='btn-container'>
        <Link to="/Projects" className='abt-btn'>View My Work</Link>
        </div>
    </div>
    
  )
}

export default About
