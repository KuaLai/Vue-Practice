const express = require('express');
const app = express();
const port = 8081;
const host = '127.0.0.1';

app.use(express.static(__dirname + '/dist'));
app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://${host}:${port}`);
});
