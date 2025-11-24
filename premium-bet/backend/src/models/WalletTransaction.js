import mongoose from "mongoose";

const walletTxSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["deposit", "withdraw", "bet", "win"], required: true },
    amount: { type: Number, required: true },
    description: String
  },
  { timestamps: true }
);

export default mongoose.model("WalletTransaction", walletTxSchema);
