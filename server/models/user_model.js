console.log("Loading user_model.js");
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var user = new mongoose.Schema({
  email: { type: String, required: true, minlength: 5},
  admin: { type:Number, required: true},
  first_name: { type:String, required:true, minlength: 2},
  last_name: { type:String, required:true, minlength: 2},
  address: [
    {street: { type:String, required:true, minlength:2 },
    city: { type:String, required:true, minlength:2 },
    zipcode: { type:Number, required:true, minlength:5, maxlength:5 },
    state: { type:String, required:true, minlength:5 }}
    ],
  phone_number: { type:Number, required:true, minlength: 10},
_orders: [{ type: Schema.Types.ObjectId, ref: 'Order', required:false}],
_products: [{ type: Schema.Types.ObjectId, ref: 'Product', required:false}],
}, {timestamps: true});

mongoose.model('User', user);
