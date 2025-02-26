import React from 'react';
import './Home.css';
import image1 from '../../assets/pexels-photo-4126712.webp';
import image2 from '../../assets/pexels-photo-4144225.jpeg';
import image3 from '../../assets/pexels-photo-4491461.webp';
import image4 from '../../assets/pexels-photo-8499501.webp';


const Home = () => {
  return (
    <>
      {/* Main Section with Background */}
      <div className="home-container">
     
        <div className="content">
          <h1 className="main-topic">Building Brighter Future</h1>
          <h2 className="sub-topic">Learn, Practice, Achieve</h2>
          <p className="description">
            Our platform provides interactive learning resources for students from Grade 6 to 11.
            Explore subjects, practice exercises, and improve your skills with expert guidance.
            Get access to step-by-step tutorials, quizzes, and personalized learning experiences
            to help you succeed academically.
          </p>
        </div>
      </div>

      {/* Separate Section for Images */}
      <div className="home-container2">
        <div className="image-grid">
          <div className="image-item">
            <img src={image1} alt="Education" />
            <p className="image-desc">Engaging Educational Resources</p>
          </div>
          <div className="image-item">
            <img src={image2} alt="Practice" />
            <p className="image-desc">Interactive Practice Exercises</p>
          </div>
          <div className="image-item">
            <img src={image3} alt="Achievement" />
            <p className="image-desc">Track Your Achievements</p>
          </div>
          <div className="image-item">
            <img src={image4} alt="Success" />
            <p className="image-desc">Success Through Learning</p>
          </div>
        </div>
        <div className="explore-section">
        <h2>Explore Our Courses</h2>
        <p>Discover various learning materials, past papers, and interactive exercises to enhance your knowledge.</p>
        <div className="explore-links">
          <a href="/categories">Explore Categories</a>
          <a href="/courses">View Courses</a>
          
        </div>

        </div>
        <div className="new-background-section">
        <h2>100% Free Courses</h2>
        <p>We are not just about profit - we are committed to making quality education accessible to everyone! Explore our vast selection of FREE courses.</p>
        </div>

      </div>
    </>
  );
};

export default Home;






