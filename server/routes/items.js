var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var Item = require('../models/item');

router.get('/add', (req, res) => {

    Item.find(function(err, posts){
        console.log(posts);
      });
     
});

router.post('/add', (req, res) => {
	console.log('Getting Data!!')
    var title = req.body.title,
    barCode = req.body.barcode,
    itemType =  req.body.itemtype,
    description = req.body.description,
    brandId = req.body.brandid,
	supplier = req.body.supplier,
    priceRegular = req.body.priceregular,
    priceSell = req.body.pricesell,
    status = req.body.status,
    createdAt = Date.now(),
    addedBy = req.body.addedby,
	updatedAt = 'first'
	
  item = new Item({ 
    title: title,
    barCode: barCode,
    itemType: itemType,
	description: description,
	supplier: supplier,
    priceRegular: priceRegular,
    priceSell:priceSell,
    brandID:brandID,
    status: status,
    createdAt: createdAt,
    addedBy: addedBy,
    updatedAt: updatedAt
  })
  
  item.save();

  res.send("success!!")

})

module.exports = router;
