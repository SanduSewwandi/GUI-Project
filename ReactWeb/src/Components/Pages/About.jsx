import React from 'react';
import './About.css';  // Import a separate CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our educational platform! Our mission is to provide quality education for students who are in school from grade 6 to 11.
      </p>
      

      <section>
        <h2>Our Vision</h2>
        <p>
          We believe that education is the key to success and we strive to make learning accessible and engaging for everyone.
        </p>
      </section>

     
        <h2>What We Offer</h2>
 
        <div className='about-container-offer'>
          <h3>Tutorial</h3>
          Comprehensive tutorials on subjects like Math, Science, History, and more.</li>
          <li>Interactive learning tools and quizzes for instant feedback.</li>
          <li>Study guides and cheat sheets for efficient learning.</li>
        </div>
     

      <section>
        <h2>Our Team</h2>
        <p>
          Our team is composed of passionate educators and developers working together to build a better learning platform.
        </p>
      </section>
    </div>
  );
};

export default About;
