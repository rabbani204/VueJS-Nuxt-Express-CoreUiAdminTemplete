const express = require('express')
var bodyParser = require('body-parser');
const { Nuxt, Builder } = require('nuxt')
var caminte = require('caminte')
var mongoose = require('mongoose')

var path = require('path');

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port);

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

    Schema = caminte.Schema;
    schema = new Schema('mongoose', {host:"amazing:db123654@ds121311.mlab.com", port:"21311",database:"amazingerp"});

    var users = require('./routes/users');
    var items = require('./routes/items');


async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use('/api/users', users);
  app.use('/api/items', items);

  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
