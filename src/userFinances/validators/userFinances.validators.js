const { body } = require("express-validator");

// Frontend already sends cents, but we validate on server too.
exports.validateIntake = [
  body("lastPaycheckCents").isInt({ min: 0 }),
  body("currentBalanceCents").isInt({ min: 0 }),
  body("savedToGoalCents").optional().isInt({ min: 0 }),
  body("needsMonthlyCents").isInt({ min: 0 }),
  body("wantsMonthlyCents").isInt({ min: 0 }),
];