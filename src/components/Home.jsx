import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Function to open resume in a new tab
const openResume = () => {
  window.open(process.env.PUBLIC_URL + "/assets/VaishnaviResume.pdf", "_blank", "noopener,noreferrer");
}


  return (
    <div className='home-container'>
      <img 
        src={`${process.env.PUBLIC_URL}/assets/female.jpg`} 
        alt="Vaishnavi Rasalay" 
      />

      <h2><i>Vaishnavi Rasalay</i></h2>
      <p className='designation'>- Frontend Developer</p>

      {/* Button to open resume */}
      <button onClick={openResume} className="btn">
        Download Resume
      </button>

      <p className='description'>
        I create beautiful, responsive websites using React, JavaScript, HTML, and CSS.
      </p>

      <div>
        <Link to="/Projects" className="btn">View Projects</Link>
        <Link to="/Contact" className="btn">Contact Me</Link>
      </div>
    </div>
  );
};

export default Home;
