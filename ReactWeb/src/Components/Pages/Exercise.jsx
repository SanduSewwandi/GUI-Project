import React from 'react';
import { useParams } from 'react-router-dom';
import './Exercise.css';

const Exercise = () => {
  const { grade, subject } = useParams();

  return (
    <div className="Exercisecontainer">
      <div className="Exercisecontainer2">
        <h1>Exercise for {subject} - Grade {grade}</h1>
        <p>Practice questions and papers for {subject} in Grade {grade} will appear here.</p>
      </div>

      <div className="exercise-lists">
        {/* Unit Papers */}
        <div className="exercise-list">
          <h2>Unit Papers</h2>
          <ul>
            <li>Unit 01</li>
            <li>Unit 02</li>
            <li>Unit 03</li>
            <li>Unit 04</li>
            <li>Unit 05</li>
          </ul>
        </div>

        {/* Model Papers */}
        <div className="exercise-list">
          <h2>Model Papers</h2>
          <ul>
            <li>Ms A.B.C</li>
            <li>Mr A.B.C</li>
            <li>Mrs A.B.C</li>
          </ul>
        </div>

        {/* Past Papers */}
        <div className="exercise-list">
          <h2>Term Test Papers</h2>
          <ul>
            <li>Western Province</li>
            <li>Southern Province</li>
            <li>Northwestern Province</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exercise;

