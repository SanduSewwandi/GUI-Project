import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logobook from '../../assets/book logo.png';




const AdminNavbar = () => {
  const location = useLocation();
  const [loguserId, setLoguserId] = useState("");

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      setLoguserId(id);
    }
  }, []);

  return (
    <div className="navbar">
      <img src={logobook} alt="Company Logo" className="logo" />
     
    </div>
  );
};

export default AdminNavbar;