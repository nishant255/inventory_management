console.log("Loading Serverside company.js");

var mongoose = require('mongoose'),
    Company = mongoose.model('Company');

function CompaniesController() {

  var _this = this;

  // -------------------------------------------------------------------------
  //                           My Controller Method
  // -------------------------------------------------------------------------
  _this.index = function(req, res){
    console.log('got to the server controller and about to search for companies in DB');
    Company.find({},function(err,result){
      if(err){
        console.log('there was an error finding companies',err);
        res.json(err);
      } else {
        console.log('successfully found companies', result);
        res.json(result)
      }
    })
  }
  _this.create = function (req, res) {
    console.log('got to the server controller with companyd data ',req.body);
    Company.create(req.body,function(err,result){
      if(err){
        console.log('there was an error creating company',err);
        res.json(err)
      } else {
        console.log('successfully created company ',result);
        res.json(result)
      }
    })
  };
}

module.exports = new CompaniesController();
