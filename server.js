const express = require('express')
const app = express();
const { PORT, DATABASE_URL } = require("./config");

app.use(express.json());

// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});

app.get('/api/*', (req,res) => {
	res.json({ok: true})
})

app.get('/jazzCharts', (req,res) => {
	res.json({"willBe":"JazzCharts"})
})

// catch-all endpoint if client makes request to non-existent endpoint
app.use("*", function(req, res) {
  res.status(404).json({ message: "Not Found" });
});

module.exports = { app }