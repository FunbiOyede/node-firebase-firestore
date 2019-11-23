const functions = require("firebase-functions");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const route = require("./routes/routes");

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes middleware
app.use(route);

// 404 handler
app.use((req, res) => {
  res.status(404).send("endpoint not found");
});

exports.App = functions.https.onRequest(app);
