var express = require('express');
var app = express();

var kind = process.env.SERVICE_NAME;
var generator = require(`./fakers/${kind}.js`);

app.get('*', function (req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send(generator(req.query));
});

app.listen(8080, function () {
  console.log('Mocking service is listening on port 8080!')
});
