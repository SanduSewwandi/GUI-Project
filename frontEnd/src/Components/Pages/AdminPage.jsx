import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash, X } from "lucide-react";
import "./AdminPage.css"; 
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [pdfs, setPdfs] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editingPdf, setEditingPdf] = useState(null); // Stores the PDF being edited
  const navigate = useNavigate();

  useEffect(() => {
    fetchPdfs();
  }, []);

  const fetchPdfs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/pdfs");
      setPdfs(response.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this PDF?");
    if (!confirmDelete) return; // If user cancels, stop execution
  
    try {
      await axios.delete(`http://localhost:8000/pdfs/${id}`);
      setPdfs(pdfs.filter((pdf) => pdf.id !== id));
    } catch (error) {
      console.error("Error deleting PDF:", error);
    }
  };
  

  const handleNavigate = () => {
    navigate("/add_pdf");
  };

  const handleEdit = (pdf) => {
    setEditingPdf(pdf); // Open the modal with selected PDF details
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/pdfs/${editingPdf.id}`, editingPdf);
      setPdfs(pdfs.map((pdf) => (pdf.id === editingPdf.id ? editingPdf : pdf))); // Update UI
      setEditingPdf(null); // Close the modal
    } catch (error) {
      console.error("Error updating PDF:", error);
    }
  };

  const filteredPdfs = filter === "All" ? pdfs : pdfs.filter((pdf) => pdf.category === filter);

  return (
    <div className="pdf-container">
      <AdminNavbar />
      <div className="pdf-header">
        <div className="filter-buttons">
          {["All", "Grade 6", "Grade 7", "Grade 8" ,  "Grade 9" , "Grade 10" , "Grade 11"  ].map((category) => (
            <button key={category} onClick={() => setFilter(category)} className="filter-button">
              {category}
            </button>
          ))}
        </div>
        <button onClick={handleNavigate} className="add-button">Add PDF</button>
      </div>
      <div className="pdf-grid">
        {filteredPdfs.map((pdf) => (
          <div key={pdf.id} className="pdf-card">
            <h3 className="pdf-title">{pdf.name}</h3>
            <p className="pdf-info">{pdf.category} - {pdf.type}</p>
            <p className="pdf-description">{pdf.description}</p>
            <a href={pdf.image} target="_blank" rel="noopener noreferrer" className="pdf-link">
              View PDF
            </a>
            <div className="pdf-actions">
              <button className="action-button edit-button" onClick={() => handleEdit(pdf)}>
                <Pencil size={16} />
              </button>
              <button className="action-button delete-button" onClick={() => handleDelete(pdf.id)}>
                <Trash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit PDF Modal */}
      {editingPdf && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <button className="close-button" onClick={() => setEditingPdf(null)}>
              <X size={20} />
            </button>
            <h2>Edit PDF</h2>
            <label>Name:</label>
            <input
              type="text"
              value={editingPdf.name}
              onChange={(e) => setEditingPdf({ ...editingPdf, name: e.target.value })}
            />
            <label>Category:</label>
            <select
              value={editingPdf.category}
              onChange={(e) => setEditingPdf({ ...editingPdf, category: e.target.value })}
            >
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
            </select>
            <label>Description:</label>
            <textarea
              value={editingPdf.description}
              onChange={(e) => setEditingPdf({ ...editingPdf, description: e.target.value })}
            />
            <label>PDF URL:</label>
            <input
              type="text"
              value={editingPdf.image}
              onChange={(e) => setEditingPdf({ ...editingPdf, image: e.target.value })}
            />
            <button className="update-button" onClick={handleUpdate}>
              Update PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
