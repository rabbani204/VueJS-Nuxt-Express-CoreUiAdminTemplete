var caminte = require('caminte'),

  Schema = caminte.Schema;
schema = new Schema('mongoose', {
  host: "amazing:db123654@ds121311.mlab.com",
  port: "21311",
  database: "amazingerp"
});

var supplierSchema = schema.define('supplier', {
  name: {
    type: schema.String,
    unique: true
  },
  addressline1: {
    type: schema.String,
  },
  addressline2: {
    type: schema.String,
  },
  city:{
    type: schema.String
  },
  state:{
    type: schema.String
  },
  zip: {
    type: schema.String,
  },
  country: {
    type: schema.String
  },
  mobile: {
    type: schema.String
  },
  fax: {
    type: schema.String,
  },
  phone: {
    type: schema.String
  },
  email: {
    type: schema.String,
  },
  website: {
    type: schema.String,
  },
  createdAt: {
    type: schema.Date,
  }
});

module.exports = schema.model('supplier', supplierSchema);
