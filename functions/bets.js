const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.placeBet = functions.https.onRequest(async (req, res) => {
  const { user, matchId, amount } = req.body;

  if (!user || !matchId || !amount) {
    return res.status(400).send("Missing data");
  }

  const betRef = admin.database().ref("bets").push();

  await betRef.set({
    user,
    matchId,
    amount,
    status: "active",
    placedAt: Date.now()
  });

  res.json({ success: true, betId: betRef.key });
});

