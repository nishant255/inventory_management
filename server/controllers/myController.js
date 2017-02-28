console.log("Loading Serverside myController.js");

var mongoose = require('mongoose'),
    user = mongoose.model('User');

function MyController() {

  var _this = this;

  // -------------------------------------------------------------------------
  //                           My Controller Method
  // -------------------------------------------------------------------------
  _this.myMethod = function (req, res) {
    // Add Some Logic
  };
}

module.exports = new MyController();
