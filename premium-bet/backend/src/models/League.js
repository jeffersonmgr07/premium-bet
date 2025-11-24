import mongoose from "mongoose";

const leagueSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: String,
    code: String
  },
  { timestamps: true }
);

export default mongoose.model("League", leagueSchema);
