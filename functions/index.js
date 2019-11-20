const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: true }));

//  acessing Cloud Firestore using the admin SDK locally
let serviceAccount = require("./node-firebase-7d509-firebase-adminsdk-r1kes-b41e6d7d24.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-firebase-7d509.firebaseio.com"
});

const db = admin.firestore();

app.get("/", (req, res) => {
  res.status(200).send("hello word");
});

exports.App = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
