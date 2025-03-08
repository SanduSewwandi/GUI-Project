import express from "express";
import multer from "multer";

import {
  createPdf,
  deletePdf,
  editPdf,
  getPdfs,
} from "../controllers/pdfController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), createPdf);
router.get("/", getPdfs);
router.delete("/:pdfId", deletePdf);
router.put("/:pdfId", upload.single("image"), editPdf);


export default router;
