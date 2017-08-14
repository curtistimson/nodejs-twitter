var express = require('express');
var Twitter = require('twitter');

var app = express();

app.get('/', (req, res) => {
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify({ a: 1 }));
});

app.listen(3000);
