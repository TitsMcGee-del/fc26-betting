const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.placeBet = require("./bets").placeBet;
exports.cashOut = require("./cashout").cashOut;
exports.createMatch = require("./matches").createMatch;

