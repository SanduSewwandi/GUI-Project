import React from 'react';
import { useParams } from 'react-router-dom';
import './PastPapers.css';

const subjectsData = {
  2023: ['Mathematics', 'Science', 'English', 'History', 'Geography'],
  2022: ['Mathematics', 'Science', 'English', 'History', 'Physics'],
  2021: ['Mathematics', 'Biology', 'English', 'History', 'Chemistry'],
  2020: ['Mathematics', 'Science', 'English', 'History', 'ICT'],
  2019: ['Mathematics', 'Science', 'English', 'Economics', 'Computer Science']
};

const PastPapers = () => {
  const { year } = useParams();
  console.log("Selected Year:", year); 

  if (!subjectsData[year]) {
    return <h1>Year not found. Please select a valid year.</h1>;
  }

  return (
    <div className="pastpapers-container">
      <h1>Past Papers - {year}</h1>
      <h2>Available Subjects:</h2>
      <ul className="subject-list">
        {subjectsData[year].map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default PastPapers;


