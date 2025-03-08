import Pdf from "../models/pdf.js";
import User from "../models/user.js";
import cloudinary from "../config/cloudinary.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "pdfs",
      allowed_formats: ["pdf"],
    },
  });
  
  const upload = multer({ storage });

// Create a Pdf
export const createPdf = async (req, res) => {
  try {
    const { name, category, type, description } = req.body;

    let tuteUrl = "";
    if (req.file) {
      const uploadedTute = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto"
      });
      tuteUrl = uploadedTute.secure_url;
    }

    const pdf = await Pdf.create({
      name,
      category,
      type,
      description,
      image: tuteUrl,
    });

    res.status(200).json(pdf);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// Get All Pets
export const getPdfs = async (req, res) => {
  try {
    const pdfs = await Pdf.findAll({
      include: User,
    });
    res.status(200).json(pdfs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



export const deletePdf = async (req, res) => {
  try {
    const { pdfId } = req.params;

    const pdf = await Pdf.findByPk(pdfId);
    if (!pdf) return res.status(404).json({ error: "Pdf not found" });

    await pdf.destroy();
    res.status(200).json({ message: "Pdf deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Pet with Image Upload
export const editPdf = async (req, res) => {
  try {
    const { pdfId } = req.params;
    const { name, category, description } = req.body;

    const pdf = await Pdf.findByPk(pdfId);
    if (!pdf) return res.status(404).json({ error: "Pdf not found" });

    let pdfUrl = pdf.pdf;
    if (req.file) {
      const uploadedPdf = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto"
      });
      pdfUrl = uploadedPdf.secure_url;
    }

    await pdf.update({ name, category, description, image: pdfUrl });

    res.status(200).json({ message: "Pdf updated successfully", pdf });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
