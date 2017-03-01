console.log("Loading order_model.js");
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var order = new mongoose.Schema({
  sender: {type: Object, required:true},
  recipient: {type: Object, required:true},
  products: [{
    _product:{ type: Schema.Types.ObjectId, ref: 'Product', required:true},
    qty: { type:Number, required: true},
    price: { type:Number, required: true},
  }],
  user: { type: Schema.Types.ObjectId, ref: 'User', required:true},
}, {timestamps: true});

mongoose.model('Order', order);
