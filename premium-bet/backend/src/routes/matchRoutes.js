import express from "express";
import Match from "../models/Match.js";

const router = express.Router();

router.get("/by-league/:leagueId", async (req, res) => {
  const matches = await Match.find({
    league: req.params.leagueId,
    status: { $in: ["upcoming", "live"] }
  }).sort({ startTime: 1 });

  res.json(matches);
});

export default router;
