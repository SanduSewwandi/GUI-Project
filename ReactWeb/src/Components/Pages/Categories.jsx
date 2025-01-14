import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className='categorycontainer'>
      <div className='catecontainer'>
        <h1>Discover specialized categories that help you master core subjects more effectively</h1>
      </div>

      <div className='subjects-container'>
        {/* Math Section */}
        <div className='subject-category'>
          <h2>Maths</h2>
          <ul className='subjects'>
            <li>Trigonometry</li>
            <li>Sets</li>
            <li>Graphs</li>
            <li>Geometry</li>
            <li>Construction</li>
          </ul>
        </div>

        {/* Science Section */}
        <div className='subject-category'>
          <h2>Science</h2>
          <ul className='subjects'>
            <li>Heat</li>
            <li>Power and Energy</li>
            <li>Electronics</li>
            <li>Electromagnetism</li>
            <li>Electrochemistry</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
