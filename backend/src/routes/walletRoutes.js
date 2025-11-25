import express from "express";
import User from "../models/User.js";
import WalletTx from "../models/WalletTransaction.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/deposit", protect, async (req, res) => {
  const { amount } = req.body;
  if (amount <= 0) return res.status(400).json({ message: "Monto inválido" });

  const user = await User.findById(req.user._id);
  user.balance += amount;
  await user.save();

  await WalletTx.create({
    user: user._id,
    type: "deposit",
    amount,
    description: "Depósito manual (simulado)"
  });

  res.json({ balance: user.balance });
});

router.post("/withdraw", protect, async (req, res) => {
  const { amount } = req.body;
  const user = await User.findById(req.user._id);
  if (amount > user.balance) return res.status(400).json({ message: "Saldo insuficiente" });

  user.balance -= amount;
  await user.save();

  await WalletTx.create({
    user: user._id,
    type: "withdraw",
    amount,
    description: "Retiro manual (simulado)"
  });

  res.json({ balance: user.balance });
});

router.get("/history", protect, async (req, res) => {
  const txs = await WalletTx.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(txs);
});

export default router;
