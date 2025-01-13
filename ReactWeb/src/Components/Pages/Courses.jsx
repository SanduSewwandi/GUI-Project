import React from 'react';
import './Courses.css';

const Courses = () => {
  const grades = [
    { grade: 6, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 7, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 8, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 9, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 10, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 11, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
  ];

  return (
    <div className='coursescontainer'>
      {grades.map((gradeItem) => (
        <div className='coursesgrade' key={gradeItem.grade}>
          <h2>Grade {gradeItem.grade}</h2>
          <ul className='subjects'>
            {gradeItem.subjects.map((subject, index) => (
              <li key={index}>
                {subject}
                <button className='learn-btn'>Learn</button>
                <button className='exercise-btn'>Exercise</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Courses;


