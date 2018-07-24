const express = require('express')
const app = express();
const { PORT, DATABASE_URL } = require("./config");
const mongoose = require('mongoose');

// Mongoose internally uses a promise-like object,
// but its better to make Mongoose use built in es6 promises
mongoose.Promise = global.Promise;

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


// // server declared here
// //server given value in runServer
// //server used in closeServer
// let server;

// // this function connects to our database, then starts the server
// function runServer(databaseUrl, port = PORT) {
//   return new Promise((resolve, reject) => {
//     mongoose.connect(
//       databaseUrl,
//       err => {
//         if (err) {
//           return reject(err);
//         }
//         server = app
//           .listen(port, () => {
//             console.log(`musicDashboard listening on port ${port}`);
//             resolve();
//           })
//           .on("error", err => {
//             mongoose.disconnect();
//             reject(err);
//           });
//       }
//     );
//   });
// }

// // this function closes the server, and returns a promise. we'll
// // use it in our integration tests later.
// function closeServer() {
//   return mongoose.disconnect().then(() => {
//     return new Promise((resolve, reject) => {
//       console.log("Closing server");
//       server.close(err => {
//         if (err) {
//           return reject(err);
//         }
//         resolve();
//       });
//     });
//   });
// }

// // if server.js is called directly (aka, with `node server.js`), this block
// // runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
// if (require.main === module) {
//   runServer(DATABASE_URL).catch(err => console.error(err));
// }

// module.exports = { app, runServer, closeServer };
module.exports = { app }