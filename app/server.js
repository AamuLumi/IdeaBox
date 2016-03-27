'use strict';

let express = require('express');
let path = require('path');

let app = express();
let port = 9940;

app.use('/public/', express.static(path.join(__dirname, './public')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);
