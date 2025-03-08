import React from 'react';
import { Link } from 'react-router-dom';  
import './Categories.css';
import image4 from '../../assets/pexels-vanessa-garcia-6326025.jpg';
import image5 from '../../assets/pexels-cottonbro-7013898.jpg';
import image6 from '../../assets/pexels-vanessa-garcia-6326381.jpg';

import pdf from '../../assets/Grade-11-Sinhala-Paper-2020-3rd-Term-Test-Southern-Province.pdf';

const Categories = () => {
  return (
    <div>
      {/* Background Section */}
      <div className='categorybackcontainer'>
      <div className="categorycontainer">
        <h1>Explore Our Categories</h1>
        <p>Choose from a variety of subjects.</p>
      </div>
      <div className='subjects-container'>

        {/* Maths Section */}
        <div className='subject-category'>
          <div className='subject-text'>
            <h2>Maths</h2>
            <ul className='subjects'>
              <li><Link to="/maths">Trigonometry</Link></li>
              <li><Link to="/maths">Sets</Link></li>
              <li><Link to="/maths">Graphs</Link></li>
              <li><Link to="/maths">Geometry</Link></li>
              <li><Link to="/maths">Construction</Link></li>
            </ul>
          </div>
          <img src={image4} alt="Math Category" className="category-image" />
        </div>

        {/* Science Section */}
        <div className='subject-category'>
          <div className='subject-text'>
            <h2>Science</h2>
            <ul className='subjects'>
              <li><Link to="/science">Heat</Link></li>
              <li><Link to="/science">Power and Energy</Link></li>
              <li><Link to="/science">Electronics</Link></li>
              <li><Link to="/science">Electromagnetism</Link></li>
              <li><Link to="/science">Electrochemistry</Link></li>
            </ul>
          </div>
          <img src={image5} alt="Science Category" className="category-image" />
        </div>

        {/* Past Papers Section */}
        <div className='subject-category'>
          <div className='subject-text'>
            <h2>Past Papers</h2>
            <ul className='subjects'>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">2023</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">2022</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">2021</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">2020</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">2019</a></li>
            </ul>
          </div>
          <img src={image6} alt="Past Papers Category" className="category-image" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Categories;
