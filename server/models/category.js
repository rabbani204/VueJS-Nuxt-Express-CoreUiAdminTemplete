var caminte = require('caminte'),

  Schema = caminte.Schema;
schema = new Schema('mongoose', {
  host: "amazing:db123654@ds121311.mlab.com",
  port: "21311",
  database: "amazingerp"
});

var supplierSchema = schema.define('supplier', {
  title: {
    type: schema.String,
    unique: true
  },
  parient: {
    type: schema.String
  },
  image: {
    type: schema.String
  },
  status: {
    type: schema.String
  }
});
module.exports = schema.model('supplier', supplierSchema);