import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from "../AdminNavbar/AdminNavbar";  // Correct relative path
import './AddGrade6.css';

const AddGrade6 = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [tute, setTute] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("image", tute);
  
    try {
      const response = await fetch("http://localhost:8000/pdfs", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert("Pdf added successfully!");
        navigate("/admin");
      } else {
        alert("Error adding pdf!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding pdf!");
    }
  };
  
  const handleTuteChange = (e) => {
    setTute(e.target.files[0]); // Store file object instead of URL
  };

  return (
    <div className="form-container">
      <AdminNavbar /> {/* AdminNavbar Component */}
      <h2 style={{ marginTop: 100 }}>Add PDF</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tute">Tute</label>
          <input type="file" onChange={handleTuteChange} required />
        </div>

        <button type="submit" className="submit-btn">
          Add Pdf
        </button>
      </form>
    </div>
  );
};

export default AddGrade6;