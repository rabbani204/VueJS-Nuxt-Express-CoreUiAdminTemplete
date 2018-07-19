var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Supplier = require('../models/supplier');

// Get Homepage
router.get('/login', (req, res) => {
  console.log('login');
});

router.get('/supplier', (req, res) => {
  Supplier.find(function (err, suyppliers) {
    console.log(suyppliers);
  });
})
router.post('/addsupplier', (req, res, next) => {
  var name = req.body.name
  var address = req.body.address
  var city = req.body.city
  var zip = req.body.zip
  var country = req.body.country
  var mobile = req.body.mobile
  var phone = req.body.phone
  var email = req.body.email
  var createdAt = Date.now()

  supplier = new Supplier({
    name: name,
    address: address,
    city: city,
    zip: zip,
    country: country,
    mobile: mobile,
    phone: phone,
    email: email,
    createdAt: createdAt
  })

  supplier.save();
  console.log("success")
})

module.exports = router;
