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
    // Needs (fixed) breakdown
    housingCents: { type: Number, default: 0, min: 0 },
    foodGroceriesCents: { type: Number, default: 0, min: 0 },
    transportCents: { type: Number, default: 0, min: 0 },
    utilitiesCents: { type: Number, default: 0, min: 0 },
    insuranceHealthCents: { type: Number, default: 0, min: 0 },
    // Wants (flexible) breakdown
    personalShoppingCents: { type: Number, default: 0, min: 0 },
    entertainmentEatingOutCents: { type: Number, default: 0, min: 0 },
    subscriptionsCents: { type: Number, default: 0, min: 0 },
    miscFunCents: { type: Number, default: 0, min: 0 },
    // Savings & Debt Payoff breakdown
    emergencyShortTermCents: { type: Number, default: 0, min: 0 },
    longTermInvestingDebtCents: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true, collation: "userFinances" }
);

module.exports = mongoose.model("UserFinances", userFinancesSchema);
