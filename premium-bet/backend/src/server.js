import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import leagueRoutes from "./routes/leagueRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/leagues", leagueRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (_req, res) => res.send("Premium Bet API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server en puerto ${PORT}`));
