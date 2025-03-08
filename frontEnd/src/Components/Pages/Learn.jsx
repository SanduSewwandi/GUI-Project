import React from 'react';
import { useParams } from 'react-router-dom';
import './Learn.css';
import image10 from '../../assets/pexels-a-darmel-9040544.jpg';
import image11 from '../../assets/pexels-cottonbro-7013898.jpg';
import image12 from '../../assets/pexels-julia-m-cameron-4145153 (1).jpg';
import image13 from '../../assets/pexels-vanessa-garcia-6325977.jpg';
import image14 from '../../assets/pexels-karolina-grabowska-6256067.jpg';
import image15 from '../../assets/pexels-shkrabaanthony-6266982.jpg';
import image16 from '../../assets/pexels-katerina-holmes-5905713.jpg';
import image17 from '../../assets/pexels-shkrabaanthony-6266976.jpg';
import image18 from '../../assets/pexels-yankrukov-8617506.jpg';
import image19 from '../../assets/pexels-diva-plavalaguna-6937871.jpg';
import image20 from '../../assets/pexels-shkrabaanthony-6267054.jpg';
import image21 from '../../assets/pexels-vanessa-garcia-6326370.jpg';
import image22 from '../../assets/pexels-shkrabaanthony-6266980.jpg';
import image23 from '../../assets/pexels-karolina-grabowska-5902865.jpg';
import image24 from '../../assets/pexels-shkrabaanthony-6266987.jpg';
import image25 from '../../assets/pexels-vanessa-garcia-6326072.jpg';




const Learn = () => {
  const { grade, subject } = useParams();

  return (
    <div className='Learncontainer'>
       <div className='Learncontainer2'>
      <h1>Learn {subject} for Grade {grade}</h1>
      <p>Content about {subject} for Grade {grade} goes here.</p>

    </div>
    <div className='Learncontainer3'>
       <div className="image-grid2">
                <div className="image-item3">
                  <img src={image10} alt="Education" />
                  <p className="image-desc1"><a href='Lesson1' >Lesson 01</a></p>
                </div>
                <div className="image-item3">
                  <img src={image11} alt="Practice" />
                  <p className="image-desc1"><a href='Lesson2'>Lesson 02</a></p>
                </div>
                <div className="image-item3">
                  <img src={image12} alt="Achievement" />
                  <p className="image-desc1"><a href='Lesson3'>Lesson 03</a></p>
                </div>
                <div className="image-item3">
                  <img src={image13} alt="Success" />
                  <p className="image-desc1"><a href='Lesson4'>Lesson 04</a></p>
                </div>
                <div className="image-item3">
                  <img src={image14} alt="Education" />
                  <p className="image-desc1"><a href='Lesson5'>Lesson 05</a></p>
                </div>
                <div className="image-item3">
                  <img src={image15} alt="Practice" />
                  <p className="image-desc1"><a href='Lesson6'>Lesson 06</a></p>
                </div>
                <div className="image-item3">
                  <img src={image16} alt="Achievement" />
                  <p className="image-desc1"><a href='Lesson7'>Lesson 07</a></p>
                </div>
                <div className="image-item3">
                  <img src={image17} alt="Success" />
                  <p className="image-desc1"><a href='Lesson8'>Lesson 08</a></p>
                </div>
                <div className="image-item3">
                  <img src={image18} alt="Education" />
                  <p className="image-desc1"><a href='Lesson9'>Lesson 09</a></p>
                </div>
                <div className="image-item3">
                  <img src={image19} alt="Practice" />
                  <p className="image-desc1"><a href='Lesson10'>Lesson 10</a></p>
                </div>
                <div className="image-item3">
                  <img src={image20} alt="Achievement" />
                  <p className="image-desc1"><a href='Lesson11'>Lesson 11</a></p>
                </div>
                <div className="image-item3">
                  <img src={image21} alt="Success" />
                  <p className="image-desc1"><a href='Lesson12'>Lesson 12</a></p>
                </div>
                <div className="image-item3">
                  <img src={image22} alt="Education" />
                  <p className="image-desc1"><a href='Lesson13'>Lesson 13</a></p>
                </div>
                <div className="image-item3">
                  <img src={image23} alt="Practice" />
                  <p className="image-desc1"><a href='Lesson14'>Lesson 14</a></p>
                </div>
                <div className="image-item3">
                  <img src={image24} alt="Achievement" />
                  <p className="image-desc1"><a href='Lesson15'>Lesson 15</a></p>
                </div>
                <div className="image-item3">
                  <img src={image25} alt="Success" />
                  <p className="image-desc1"><a href='Lesson16'>Lesson 16</a></p>
                </div>

              </div>
    </div>

    </div>
    
  );
};

export default Learn;
