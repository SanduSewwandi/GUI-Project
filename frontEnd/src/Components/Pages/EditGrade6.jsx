import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../Compenents/AdminNavbar/AdminNavbar';

const EditGrade6 = () => {
  const { pdfId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [tute, setTute] = useState(null); // Changed from string to file
  const [preview, setPreview] = useState(''); // Preview for existing image

  useEffect(() => {
    fetch(`http://localhost:8000/pdfs/${pdfId}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setCategory(data.category);
        setType(data.type);
        setDescription(data.description);
        setPreview(data.tute); // Set the existing image URL for preview
      })
      .catch((error) => console.error('Error fetching pdf:', error));
  }, [pdfId]);

  const handleTuteChange = (e) => {
    const file = e.target.files[0];
    setTute(file);
    setPreview(URL.createObjectURL(file)); // Show preview of new image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("description", description);
   
    if (tute) {
      formData.append("tute", tute);
    }

    try {
      const response = await fetch(`http://localhost:8000/pdfs/${pdfId}`, {
        method: 'PUT',
        body: formData, // No need to set Content-Type, FormData handles it
      });

      if (response.ok) {
        alert('Grade6 updated successfully!');
        navigate("/admin");
      } else {
        alert('Error updating grade6!');
        console.error('Failed to update grade6:', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating grade6!');
    }
  };

  return (
    <div className="form-container">
      <AdminNavbar />
      <h2 style={{ marginTop: 100 }}>Edit Grdae6</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            <option value="Grade6">Grade6</option>
            <option value="Grade7">Grade7</option>
            <option value="Grade8">Grade8</option>
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
          <input type="file" accept="tute/*" onChange={handleTuteChange} />
        </div>

        {preview && (
  <div className="tute-preview">
    <p>Current Tute:</p>
    <iframe
      src={preview}
      title="PDF Preview"
      style={{ width: "200px", height: "300px", marginTop: "10px", border: "1px solid #ddd" }}
    />
  </div>
)}


        <button type="submit" className="submit-btn">
          Update Grade6
        </button>
      </form>
    </div>
  );
};

export default EditGrade6;
