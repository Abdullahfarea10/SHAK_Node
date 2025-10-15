const { matchedData, validationResult } = require("express-validator");
const { saveUserFinances } = require("./providers/userFinances.provider");

exports.createUserFinances = async (req, res) => {
  // express-validator results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ ok: false, errors: errors.array() });
  }

  const data = matchedData(req, { locations: ["body"] });


  try {
    const doc = await saveUserFinances(data);
    return res.status(201).json({ ok: true, id: doc._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
};



