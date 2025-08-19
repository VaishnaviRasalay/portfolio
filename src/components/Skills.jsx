import React from 'react'

const Skills = () => {
  return (
    <div className='skill-container'>
     <section>
        <h3 className='skill-h3'> Programming Languages</h3>
        <ul>
            <li>Java (Core Java, OOP Concepts, Collections, Data Structures)</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5, CSS3</li>
        </ul>
     </section>

     <section>
        <h3 className='skill-h3'>Frameworks & Libraries</h3>
        <ul>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>WordPress (Elementor Pro, SEO Plugins)</li>
        </ul>
     </section>

     <section>
        <h3 className='skill-h3'>Tools & Platforms</h3>
        <ul>
            <li>Git, GitHub</li>
            <li>Annotation Tools (for AI dataset preparation)</li>
            <li>SEO Tools (All in One SEO)</li>
        </ul>
     </section>

     <section>
        <h3 className='skill-h3'>Databases</h3>
        <ul><li>MySQL (Basic Queries & Data Handling)</li></ul>
     </section>

     <section>
        <h3 className='skill-h3'> Other Skills</h3>
        <ul>
            <li>Responsive Web Design</li>
            <li>Routing & State Management in React</li>
            <li>Image Annotation for AI Models</li>
            <li>Communication & Team Collaboration</li>
        </ul>
     </section>
    </div>
  )
}

export default Skills
