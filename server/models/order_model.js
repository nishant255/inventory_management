console.log("Loading order_model.js");
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var order = new mongoose.Schema({
  sender: {type: Object, required:false},
  recipient: {type: Object, required:true},
  products: [{
    _product:{ type: Schema.Types.ObjectId, ref: 'Product', required:true},
    qty: { type:Number, required: true},
    price: { type:Number, required: true},
  }],
  address: {
    name: { type:String, required:true, minlength:2 },
    street: { type:String, required:true, minlength:2 },
    city: { type:String, required:true, minlength:2 },
    zipcode: { type:String, required:true, minlength:5, maxlength:5 },
    state: { type:String, required:true, minlength:5 }
  },
  user: { type: Schema.Types.ObjectId, ref: 'User', required:true},
}, {timestamps: true});

mongoose.model('Order', order);
