import mongoose from "mongoose";

const betSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    match: { type: mongoose.Schema.Types.ObjectId, ref: "Match", required: true },
    market: { type: String, enum: ["1", "X", "2"], required: true },
    odd: { type: Number, required: true },
    amount: { type: Number, required: true },
    potentialWin: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "won", "lost", "void"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Bet", betSchema);
