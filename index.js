// Matthew Merrill <mattmerr.com>
const redis = require('async-redis'),
  client = redis.createClient();

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser);

client.on('error', function(err) {
  console.error('Error', err);
});

app.post('/redisq/:id', (req, res) => {
  
});

const port = process.env.PORT
console.log('Listening on port', port);
app.listen(port);

