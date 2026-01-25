const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.createMatch = functions.https.onRequest(async (req, res) => {
  const { home, away, odds } = req.body;

  if (!home || !away || !odds) {
    return res.status(400).send("Missing data");
  }

  const matchRef = admin.database().ref("matches").push();

  await matchRef.set({
    home,
    away,
    odds,
    createdAt: Date.now()
  });

  res.json({ success: true, matchId: matchRef.key });
});

