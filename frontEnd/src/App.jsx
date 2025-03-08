import React, { useState } from 'react';
import { Routes, Route, Navigate,useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Home, Categories, Courses, About, SignUp, LogIn, Profile, AdminPage } from './Components/Pages';
import Learn from './Components/Pages/Learn';
import Exercise from './Components/Pages/Exercise';
import PastPapers from './Components/Pages/PastPapers';
import Science from './Components/Pages/Science';
import Maths from './Components/Pages/Maths';
import AddGrade6 from './Components/Pages/AddGrade6'; // Assuming this is the component you meant

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Protected Route Wrapper
  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login" replace />;
  };

  const location = useLocation(); 
  const hideNavbar = ["/admin","/add_pdf"].includes(location.pathname);
  

  return (
    <div className="container">
      {!hideNavbar && <Navbar/>}
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />

        {/* Authentication Routes */}
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected Routes */}
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/learn/:grade/:subject" element={<ProtectedRoute element={<Learn />} />} />
        <Route path="/exercise/:grade/:subject" element={<ProtectedRoute element={<Exercise />} />} />
        <Route path="/pastpapers/:year" element={<ProtectedRoute element={<PastPapers />} />} />
        <Route path="/science" element={<ProtectedRoute element={<Science />} />} />
        <Route path="/maths" element={<ProtectedRoute element={<Maths />} />} />
        <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} />} />
        
        {/* Add Grade 6 Route */}
        <Route path="/add_pdf" element={<AddGrade6 />} /> {/* Assuming this is the correct page */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;