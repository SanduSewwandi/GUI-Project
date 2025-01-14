import React from 'react';
import { useParams } from 'react-router-dom';
import './Learn.css';

const Learn = () => {
  const { grade, subject } = useParams();

  return (
    <div className='Learncontainer'>
       <div className='Learncontainer2'>
      <h1>Learn {subject} for Grade {grade}</h1>
      <p>Content about {subject} for Grade {grade} goes here.</p>
    </div>
    </div>
  );
};

export default Learn;
