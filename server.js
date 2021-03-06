
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/heroku11-app'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/heroku11-app/index.html');
});

app.listen(process.env.PORT || 8080);