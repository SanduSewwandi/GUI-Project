import React from 'react';
import './Home.css';
import homeImage from '../../assets/for home.jpg';
import backgroundImage from '../../assets/background image.jpg';

const Home = () => {
  return (
    <div className="homecontainer">
      {/* Background Section */}
      <div className="background-section">
        <img src={backgroundImage} alt="Background" className="backimage" />

        {/* Text on Background */}
        <h2 className="overlay-text">Learn, Practice, Succeed - All in One Place!</h2>

        {/* Additional Image on the Left */}
        <img src={homeImage} alt="Home Overlay" className="overlay-image" />
      </div>
    </div>
  );
};

export default Home;



