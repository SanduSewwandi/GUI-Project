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

      
      <section className="extra-section">
        <h2> Learning Resources</h2>
        <p>
          Explore a wide range of learning materials, including video tutorials, practice exercises, and downloadable resources to enhance your learning experience.
        </p>
      </section>

      <section className="extra-section">
        <h2>Student Community</h2>
        <p>
          Join our vibrant student community, where you can collaborate, ask questions, and share your knowledge with peers.
        </p>
      </section>

      <section className="extra-section">
        <h2>Teacher's Corner</h2>
        <p>
          A dedicated space for educators to contribute content, manage lessons, and access teaching resources to support student success.
        </p>
      </section>

      <div className="image-section">
        <img src="/src/assets/pexels-vanessa-garcia-6326381.jpg" alt="" />
        <img src="/src/assets/pexels-photo-4126712.webp" alt="" />
        <img src="/src/assets/pexels-cottonbro-7013898.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
