require('dotenv').config()

var express = require('express');
var cors = require('cors');

var app = express();

//MIDDLEWARES
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.use('/', require('./routes'))

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
