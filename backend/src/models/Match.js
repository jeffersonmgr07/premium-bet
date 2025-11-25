import mongoose from "mongoose";

const oddSchema = new mongoose.Schema({
  home: Number,
  draw: Number,
  away: Number
});

const matchSchema = new mongoose.Schema(
  {
    league: { type: mongoose.Schema.Types.ObjectId, ref: "League", required: true },
    homeTeam: { type: String, required: true },
    awayTeam: { type: String, required: true },
    startTime: { type: Date, required: true },
    odds1x2: oddSchema,
    status: {
      type: String,
      enum: ["upcoming", "live", "finished"],
      default: "upcoming"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Match", matchSchema);
