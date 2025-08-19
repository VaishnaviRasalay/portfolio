import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
const openResume=()=>{
  window.open("/assets/MCA_Resume.pdf")
}


  return (
    <div className='home-container'>
      <img  className='image' src="/assets/female.jpg" alt="profile photo"/>
      <h2><i>Vaishnavi Rasalay</i></h2>
      <p className='designation'>-Frontend Developer</p>
      
      <button onClick={openResume}>Download Resume</button>
      <p className='description'>I create beautiful, responsive websites using React, JavaScript, HTML, and CSS.</p>
   <div >  
<Link to="/Projects" className="btn">View Projects</Link>
<Link to="/Contact" className="btn">Contact Me</Link>
</div> 




    </div>
  )
}

export default Home
