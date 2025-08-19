import React from 'react'

const Projects = () => {
  return (
    <div className='project-container'>
      <h2 className='projects'>Projects</h2>
      <section>
              <h3 className='project-h3'>Multi-Objective Optimization Scheme for Job Scheduling in Sustainable Cloud Data Center</h3>
                <p>Developed in Java to optimize cloud job scheduling for better energy efficiency and resource utilization.</p>
            <ul>
            <li>Improved task allocation speed and reduced computational cost.</li>
            <li><strong>Tech Stack</strong>: Java, OOP Concepts, Data Structures.</li>
        </ul>
        </section>

        <section>
        <h3 className='project-h3'>WordPress Business Website</h3>
       
            <p>Built a fully responsive business website using Zegan theme.</p>
        <ul>
            <li>Integrated Elementor Pro for drag-and-drop design, Contact Form, WP Mailing, and SMTP for communication.</li>
            <li>Implemented SEO with “All in One SEO” plugin.</li>
            <li><strong>Tech Stack</strong>: WordPress, Elementor Pro, SEO Tools.</li>
        </ul>
        </section>

        <section>
       <h3 className='project-h3'>Shopping Mall UI with React</h3>
       
            <p>Created a product listing interface with search functionality, filtering, routing, and a basic cart system.</p>
            <ul>
                <li><strong>Tech Stack</strong>: React.js, JavaScript, CSS.</li>
            </ul>
         </section>

         <section>
     <h3 className='project-h3'>AI Model Annotation Tool (Cognizant Project)</h3>
       <p>Annotated images to train AI models for better object detection and recognition.</p>
             <ul>
            <li>Ensured dataset accuracy and consistency for computer vision systems.</li>
            <li><strong>Tech Stack</strong>: Annotation Tools, AI Dataset Preparation.</li>
        </ul>
        </section>

  
    </div>
  )
}

export default Projects
