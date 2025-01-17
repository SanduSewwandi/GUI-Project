import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  
  const navigate = useNavigate();

  const grades = [
    { grade: 6, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 7, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 8, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 9, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 10, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
    { grade: 11, subjects: ["Maths", "Science", "English", "Buddhism", "Sinhala", "History"] },
  ];

  const handleNavigation = (grade, subject, type) => {
    navigate(`/${type.toLowerCase()}/${grade}/${subject}`);
  };

  return (
    <div className="coursesbackcontainer">
    <div className="coursescontainer">
      {grades.map((gradeItem) => (
        <div className="coursesgrade" key={gradeItem.grade}>
          <h2>Grade {gradeItem.grade}</h2>
          <ul className="subjects">
            {gradeItem.subjects.map((subject, index) => (
              <li key={index}>
                {subject}
                <button
                  className="learn-btn"
                  onClick={() => handleNavigation(gradeItem.grade, subject, 'Learn')}
                >
                  Learn
                </button>
                <button
                  className="exercise-btn"
                  onClick={() => handleNavigation(gradeItem.grade, subject, 'Exercise')}
                >
                  Exercise
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Courses;
