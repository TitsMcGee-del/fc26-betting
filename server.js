const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serves your HTML

// Initialize Firebase Admin (Server-side access)
// For IDX, we use the Database URL you provided
admin.initializeApp({
  credential: admin.credential.applicationDefault(), // IDX handles this or use a Service Account JSON
  databaseURL: "https://fc26-full-bets-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.database();

// --- SERVER-SIDE LOGIC: SETTLE MATCH ---
app.post('/api/settle-match', async (req, res) => {
    const { matchId, score } = req.body;
    
    try {
        const matchRef = db.ref(`matches/${matchId}`);
        const snap = await matchRef.once('value');
        const match = snap.val();

        if (!match || match.result) return res.status(400).send("Match already settled or not found");

        // 1. Update Match Score
        await matchRef.update({ result: score });

        // 2. Process Bets (Server-side loop)
        const betsSnap = await db.ref('bets').once('value');
        const allBets = betsSnap.val() || {};
        const updates = {};

        for (const [userId, userBets] of Object.entries(allBets)) {
            if (userBets[matchId]) {
                const bet = userBets[matchId];
                const [h, a] = score.split('-').map(Number);
                let won = false;
                if (h > a && bet.pick === '1') won = true;
                if (h === a && bet.pick === 'X') won = true;
                if (h < a && bet.pick === '2') won = true;

                if (won) {
                    const payout = Math.floor(bet.stake * bet.odds);
                    const userRef = db.ref(`users/${userId}/credits`);
                    const userSnap = await userRef.once('value');
                    updates[`users/${userId}/credits`] = (userSnap.val() || 0) + payout;
                    updates[`bets/${userId}/${matchId}/status`] = 'won';
                } else {
                    updates[`bets/${userId}/${matchId}/status`] = 'lost';
                }
            }
        }
        await db.ref().update(updates);
        res.send({ success: true });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// --- SERVER-SIDE LOGIC: ARCHIVE SEASON ---
app.post('/api/archive', async (req, res) => {
    // Move all logic for shifting history and wiping matches here
    // This prevents the browser from crashing during a large update
    // ... logic ...
    res.send({ message: "Season Archived Server-Side" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
