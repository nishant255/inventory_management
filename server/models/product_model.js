console.log("Loading product_model.js");
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var product = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2},
  buyPrice: { type:Number, required: true},
  sellPrice: { type:Number, required: true},
  quantity: { type:Number, required: true},
_company: { type: Schema.Types.ObjectId, ref: 'Company', required:true},
}, {timestamps: true});

mongoose.model('Product', product);
