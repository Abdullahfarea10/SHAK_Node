const UserFinances = require("../userFinances.schema");

exports.saveUserFinances = async (payload) => {
  // Optional: idempotency (update existing by user)
  // if (payload.user) {
  //   return UserFinances.findOneAndUpdate({ user: payload.user }, payload, { upsert: true, new: true });
  // }

  const doc = await UserFinances.create(payload);
  return doc;
};
