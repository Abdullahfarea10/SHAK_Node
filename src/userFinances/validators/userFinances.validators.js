const { body } = require("express-validator");

exports.validateIntake = [
  body("lastPaycheckCents").isInt({ min: 0 }),
  body("currentBalanceCents").isInt({ min: 0 }),
  body("savedToGoalCents").optional().isInt({ min: 0 }),
  body("needsMonthlyCents").isInt({ min: 0 }),
  body("wantsMonthlyCents").isInt({ min: 0 }),
  // Needs
  body("housingCents").optional().isInt({ min: 0 }),
  body("foodGroceriesCents").optional().isInt({ min: 0 }),
  body("transportCents").optional().isInt({ min: 0 }),
  body("utilitiesCents").optional().isInt({ min: 0 }),
  body("insuranceHealthCents").optional().isInt({ min: 0 }),
  // Wants
  body("personalShoppingCents").optional().isInt({ min: 0 }),
  body("entertainmentEatingOutCents").optional().isInt({ min: 0 }),
  body("subscriptionsCents").optional().isInt({ min: 0 }),
  body("miscFunCents").optional().isInt({ min: 0 }),
  // Savings & Debt payoff
  body("emergencyShortTermCents").optional().isInt({ min: 0 }),
  body("longTermInvestingDebtCents").optional().isInt({ min: 0 }),
];
