const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.cashOut = functions.https.onRequest(async (req, res) => {
  const { betId } = req.body;

  if (!betId) {
    return res.status(400).send("Missing betId");
  }

  const betRef = admin.database().ref(`bets/${betId}`);
  const snapshot = await betRef.once("value");

  if (!snapshot.exists()) {
    return res.status(404).send("Bet not found");
  }

  await betRef.update({
    status: "cashed_out",
    cashedOutAt: Date.now()
  });

  res.json({ success: true });
});

