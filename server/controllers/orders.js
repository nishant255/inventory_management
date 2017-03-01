console.log("Loading Serverside orders.js");

var mongoose = require('mongoose'),
    Order = mongoose.model('Order');

function OrdersController() {

  var _this = this;

  // -------------------------------------------------------------------------
  //                           My Controller Method
  // -------------------------------------------------------------------------
  _this.index = function(req, res){
    console.log('got to the server controller and about to search for orders in DB');
    Order.find({},function(err,result){
      if(err){
        console.log('there was an error finding orders',err);
        res.json(err);
      } else {
        console.log('successfully found orders', result);
        res.json(result)
      }
    })
  }
  _this.create = function (req, res) {
    console.log('got to the server controller with order data ',req.body);
    Order.create(req.body,function(err,result){
      if(err){
        console.log('there was an error creating order ',err);
        res.json(err)
      } else {
        console.log('successfully created order ',result);
        res.json(result)
      }
    })
  }
  _this.show = function(req,res){
    console.log('got to server controller with order data');
    Order.findOne({_id: req.body}, function(err, result){
      if (err){
        console.log('error showing order ', err);
        res.json(err);
      } else {
        console.log('successfully found order', result);
        res.json(result);
      }
    })
  }
}

module.exports = new OrdersController();
