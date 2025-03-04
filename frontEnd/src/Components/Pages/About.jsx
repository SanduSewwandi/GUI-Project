import React from 'react';
import './About.css'; 
 
const About = () => {
  return (
    <div className="about-container">
      <div className='aboutcontainerheader'>
      <h1>About Us</h1>
      <p>
        Welcome to our educational platform! Our mission is to provide quality education for students who are in school from grade 6 to 11.
      </p>
      </div>

      <section>
        <h2>Our Vision</h2>
        <p>
          We believe that education is the key to success and we strive to make learning accessible and engaging for everyone.
        </p>
      </section>

      <section>
        <h2>What We Offer</h2>
 
        <ul className='about-container-offer'>
          
          <li>Comprehensive tutorials on subjects like Math, Science, History, and more.</li>
          <li>Interactive learning tools and quizzes for instant feedback.</li>
          <li>Study guides and cheat sheets for efficient learning.</li>
        </ul>
      </section>

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
