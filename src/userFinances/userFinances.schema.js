const mongoose = require("mongoose");
const { Schema } = mongoose;

const userFinancesSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" }, // optional until auth is in
    lastPaycheckCents: { type: Number, required: true, min: 0 },
    currentBalanceCents: { type: Number, required: true, min: 0 },
    savedToGoalCents: { type: Number, default: 0, min: 0 },
    needsMonthlyCents: { type: Number, required: true, min: 0 },
    wantsMonthlyCents: { type: Number, required: true, min: 0 },
  },
  { timestamps: true, collation: "userFinances" }
);

module.exports = mongoose.model("UserFinances", userFinancesSchema);