import React from 'react';
import {  BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Home, Categories, Courses, About ,SignUp,LogIn,Profile} from './Components/Pages';
import Learn from './Components/Pages/Learn';
import Exercise from './Components/Pages/Exercise';
import PastPapers from './Components/Pages/PastPapers';
import Footer from './Components/Footer/Footer';
import Science from './Components/Pages/Science';
import Maths from './Components/Pages/Maths';

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
          <Route path="/" element={<Home />} />
         <Route path="/learn/:grade/:subject" element={<Learn />} />
         <Route path="/exercise/:grade/:subject" element={<Exercise />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/pastpapers/:year" element={<PastPapers />} />
         <Route path="/science" element={<Science />} />
         <Route path="/maths" element={<Maths />} />
     
        </Routes> 
        <Footer />
       

      </div>
    
      
  );
};

export default App;