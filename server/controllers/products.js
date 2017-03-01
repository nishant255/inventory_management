console.log("Loading Serverside products.js");

var mongoose = require('mongoose'),
    Product = mongoose.model('Product');

function ProductsController() {

  var _this = this;

  // -------------------------------------------------------------------------
  //                           My Controller Method
  // -------------------------------------------------------------------------
  _this.index = function(req, res){
    console.log('got to the server controller and about to search for products in DB');
    Product.find({},function(err,result){
      if(err){
        console.log('there was an error finding products',err);
        res.json(err);
      } else {
        console.log('successfully found products', result);
        res.json(result)
      }
    })
  }
  _this.create = function (req, res) {
    console.log('got to the server controller with product data ',req.body);
    Product.create(req.body,function(err,result){
      if(err){
        console.log('there was an error creating product',err);
        res.json(err)
      } else {
        console.log('successfully created product ',result);
        res.json(result)
      }
    })
  }
  _this.show = function(req,res){
    console.log('got to the server with product id ', req.body);
    Product.findOne({_id: req.body}, function(err,result){
      if (err){
        console.log('error showing product');
      } else {
        console.log('successfully got product ', result);
        res.json(result)
      }
    })
  }
}

module.exports = new ProductsController();
