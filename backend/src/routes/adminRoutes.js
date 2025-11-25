import express from "express";
import multer from "multer";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import { importMatchesFromCsv } from "../utils/csvImporter.js";

const router = express.Router();
const upload = multer();

router.post(
  "/upload-matches",
  protect,
  adminOnly,
  upload.single("file"),
  async (req, res) => {
    try {
      await importMatchesFromCsv(req.file.buffer);
      res.json({ message: "Eventos importados correctamente" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al importar CSV" });
    }
  }
);

export default router;
