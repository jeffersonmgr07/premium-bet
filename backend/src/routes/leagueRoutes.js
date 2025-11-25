import express from "express";
import League from "../models/League.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const leagues = await League.find().sort({ name: 1 });
  res.json(leagues);
});

export default router;
