import React from 'react';
import { useParams } from 'react-router-dom';
import './Exercise.css';

import pdf from '../../assets/Grade-11-Sinhala-Paper-2020-3rd-Term-Test-Southern-Province.pdf';

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
            <li><a href={pdf} target="_blank" rel="noopener noreferrer">Unit 01</a></li>
            <li><a href={pdf} target="_blank" rel="noopener noreferrer">Unit 02</a></li>
            <li><a href={pdf} target="_blank" rel="noopener noreferrer">Unit 03</a></li>
            <li><a href={pdf} target="_blank" rel="noopener noreferrer">Unit 04</a></li>
            <li><a href={pdf} target="_blank" rel="noopener noreferrer">Unit 05</a></li>
          </ul>
        </div>

        {/* Model Papers */}
        <div className="exercise-list">
          <h2>Model Papers</h2>
          <ul>
            <li><a href={pdf} target="_blank" rel="noopener noreferrer">Ms A.B.C</a></li>
            <li><a href={pdf} target="_blank" rel="noopener noreferrer">Mr A.B.C </a></li>
            <li><a href={pdf} target="_blank" rel="noopener noreferrer">Mrs A.B.C</a></li>
          </ul>
        </div>

        {/* Past Papers */}
        <div className="exercise-list">
          <h2>Term Test Papers</h2>
          <ul>
            <li>Western Province</li>
              <ol>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">First term</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">Second term</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">Third term</a></li>
               </ol>
            <li>Southern Province</li>
            <ol>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">First term</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">Second term</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">Third term</a></li>
               </ol>
            <li>Northwestern Province</li>
            <ol>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">First term</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">Second term</a></li>
              <li><a href={pdf} target="_blank" rel="noopener noreferrer">Third term</a></li>
               </ol>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exercise; 

