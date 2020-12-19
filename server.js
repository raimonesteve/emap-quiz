// var http = require('http');
// var fs = require('fs');
//
// const PORT=8080;
//
// fs.readFile('./emap-intervals.html', function (err, html) {
//
//     if (err) throw err;
//
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(PORT);
// });



const express = require('express');
const static = require('static');
const app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Static server. Add a path.');
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`);
  console.log('Press Ctrl+C to quit.');
});

// // middleware to use for all requests
// const logController = (req, res, next) => {
//   // do logging
//   console.log('req.method = ' + req.method);
//   console.log('req.URL = ' + req.originalUrl);
//   console.log('req.body = ' + JSON.stringify(req.body));
//   console.log("======================");
//   next(); // make sure we go to the next routes and don't stop here
// };
