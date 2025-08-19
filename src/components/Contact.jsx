import React, { useState } from 'react'


const Contact = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    text:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
  };
 const [submitted,setSubmitted]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    setFormData({ name:'', email:'', text:'' });
  };


  return (
    <div>
    <h2 className='contact'>Contact Me</h2>
    <p className='contact-des'>"Feel free to get in touch for collaborations, project discussions, or job opportunities."</p>
    <div className='details'>
        <p><i class="fa-solid fa-at"></i><strong>Email:</strong>rasalayvaishnavi@gmail.com</p>
        <p><i className="fa-solid fa-location-dot"></i><strong>Location:</strong>Hyderabad, India</p>
        <p><i className="fa-brands fa-linkedin"></i><strong>Linked In:</strong><a href="https://www.linkedin.com/in/rasalay-vaishnavi-302187321" target="_blank">Linked in</a></p>
        <p><i className="fa-brands fa-github"></i><strong>Git Hub:</strong><a href="https://github.com/VaishnaviRasalay" target="_blank">Git Hub</a></p>
    </div>
    <div className='container-form'>
        <form className='contact-form' onSubmit={handleSubmit}>
            <input type="name" placeholder='Enter your name...' required onChange={handleChange} name='name' value={formData.name}/>
            <input type="email" placeholder='Enter your Email...'name='email'value={formData.email} required onChange={handleChange}/>
            <textarea type="text" placeholder='Enter your Message...'name='text'value={formData.text} required onChange={handleChange }/>
            <button className="contact-btn" type="submit">Submit</button>
        </form>
        {submitted && <p style={{ color: "green" }}>✅ <b>Thank you for submitting!</b></p>}

        </div>

    </div>
  )
}

export default Contact
