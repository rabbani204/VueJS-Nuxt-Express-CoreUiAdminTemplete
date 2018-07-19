var caminte = require('caminte'),

  Schema = caminte.Schema;
schema = new Schema('mongoose', {
  host: "amazing:db123654@ds121311.mlab.com",
  port: "21311",
  database: "amazingerp"
});

var itemSchema = schema.define('item', {
  title: {
    type: schema.String,
    unique: true
  },
  barCode: {
    type: schema.String,
    unique: true
  },
  itemType:{
    type: schema.String,
  },
  description: {
    type: schema.String,
  },
  priceRegular: {
    type: schema.String,
  },
  priceSell: {
    type: schema.String,
  },
  status: {
    type: schema.String,
  },

  brandId:{
    type: schema.String
  },
  assemble:{
    type: schema.String
  },
  createdAt: {
    type: schema.Date,
  },
  supplier:{
    type: schema.String,
  },
  addedBy: {
    type: schema.String,
  },
  createdAt: {
    type: schema.Date,
  }

});

module.exports = schema.model('item', itemSchema);
