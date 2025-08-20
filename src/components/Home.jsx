import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Function to open resume in a new tab



  return (
    <div className='home-container'>
      <img className='image'
        src={`${process.env.PUBLIC_URL}/assets/female.jpg`} 
        alt="Vaishnavi Rasalay" 
      />

      <h2><i>Vaishnavi Rasalay</i></h2>
      <p className='designation'>- Frontend Developer</p>
<a
  href={`${process.env.PUBLIC_URL}/assets/vaishnaviresume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  Open Resume
</a>



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
