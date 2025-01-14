import React from 'react';
import {  BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Home, Categories, Courses, About ,SignUp,LogIn} from './Components/Pages';
import Learn from './Components/Pages/Learn';
import Exercise from './Components/Pages/Exercise';

const App = () => {
  return (

    
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<Courses />} />
         <Route path="/learn/:grade/:subject" element={<Learn />} />
         <Route path="/exercise/:grade/:subject" element={<Exercise />} />
        </Routes> 
      </div>
      
  );
};

export default App;