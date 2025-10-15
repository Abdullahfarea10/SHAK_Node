const express = require("express");
const router = express.Router();

const { createUserFinances } = require("./userFinances.controller");
const { validateIntake } = require("./validators/userFinances.validators");


router.post("/intake",
  // auth,
  validateIntake,
  createUserFinances
);

module.exports = router;

const { benchmarkBudget } = require("./userFinances.controller");

router.post("/benchmark", benchmarkBudget);
