import React from 'react';
import {  BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Home, Categories, Courses, About ,SignUp,LogIn} from './Components/Pages';

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
        </Routes> 
      </div>
    
  );
};

export default App;