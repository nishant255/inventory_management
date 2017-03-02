console.log("Loading Serverside userController.js");

var mongoose = require('mongoose'),
    User = mongoose.model('User');

function UserController() {

  var _this = this;
  var error_messages = [];
  var success = true;

  // -------------------------------------------------------------------------
  //                      Create or Return Existing User
  // -------------------------------------------------------------------------
  _this.createUser = function (req, res) {
    console.log("Creating User");
    console.log(req.body);
    error_messages = [];
    if (!req.body.first_name) {
      console.log("No First Name");
      error_messages.push("First Name is Required");
      success = false;
    }
    if (req.body.first_name.length < 2) {
      console.log("First Name has to be 2 or more Characters");
      error_messages.push("First Name has to be 2 or more Characters");
      success = false;
    }
    if (!req.body.last_name) {
      console.log("No Last Name");
      error_messages.push("Last Name is Required");
      success = false;
    }
    if (req.body.last_name.length < 2) {
      console.log("Last Name has to be 2 or more Characters");
      error_messages.push("Last Name has to be 2 or more Characters");
      success = false;
    }
    if (!req.body.email) {
      console.log("No email");
      error_messages.push("Email is Required");
      success = false;
    }
    if (req.body.email.length < 5) {
      console.log("Email has to be 5 or more Characters");
      error_messages.push("Email has to be 5 or more Characters");
      success = false;
    }
    if (!req.body.password) {
      console.log("No password");
      error_messages.push("Password is Required");
      success = false;
    }
    if (req.body.password.length < 4) {
      console.log("Password has to be 4 or more Characters");
      error_messages.push("Password has to be 4 or more Characters");
      success = false;
    }
    if (!req.body.phone_number) {
      console.log("No Phone Number");
      error_messages.push("Phone Number is Required");
      success = false;
    }
    if (!/^\d+$/.test(req.body.phone_number)) {
      console.log("Phone Number Should Contain only Digits");
      error_messages.push("Phone Number can Contain Only Numbers");
      success = false;
    }
    if (req.body.phone_number.length !== 10) {
      console.log("Phone Number has to be 10 Digits");
      error_messages.push("Phone Number has to be 10 Digits");
      success = false;
    }
    if (!success) {
      res.json({success: false, error_messages: error_messages});
      return;
    }
    var newCreatedUser = new User({
      first_name: req.body.first_name.toLowerCase(),
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      password: req.body.password,
      admin: 2
    });
    newCreatedUser.save(function (err, user) {
      if (err) {
        console.log("Email already Registered");
        error_messages.push("Email Already Registered! Please Login.");
        res.json({success: false, error_messages: error_messages});
        console.log(err);
        throw err;
      }
      res.json({success: true, user: user});
    });
  };

  // -------------------------------------------------------------------------
  //                      Create or Return Existing User
  // -------------------------------------------------------------------------
  _this.loginUser = function (req, res) {
    console.log("Logging User");
    console.log(req.body);
    error_messages = [];
    if (!req.body.email) {
      console.log("No email");
      error_messages.push("Email is Required");
      success = false;
    }
    if (req.body.email.length < 5) {
      console.log("Email has to be 5 or more Characters");
      error_messages.push("Email has to be 5 or more Characters");
      success = false;
    }
    if (!req.body.password) {
      console.log("No password");
      error_messages.push("Password is Required");
      success = false;
    }
    if (req.body.password.length < 4) {
      console.log("Password has to be 4 or more Characters");
      error_messages.push("Password has to be 4 or more Characters");
      success = false;
    }
    if (!success) {
      res.json({success: false, error_messages: error_messages});
      return;
    }
    User.findOne({
      email: req.body.email
    }, function (err, user) {
      if (err) {
        console.log(err);
        throw err;
      }
      if (!user) {
            error_messages.push("Invalid Email or Password.");
            res.json({success: false, error_messages: error_messages});
      } else {
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // var token = jwt.en
            res.json({success: true, user:user});
          } else {
            error_messages.push("Invalid Email or Password.");
            res.json({success: false, error_messages: error_messages});
          }
        });
      }
    });
  };

  // -------------------------------------------------------------------------
  //                           Get all the users
  // -------------------------------------------------------------------------
  _this.all_users = function (req, res) {
    User.find({}).populate('_appointment').exec(function (err, users) {
      if (err) {
        console.log("Error While finding all the users");
        console.log(err);
      } else {
        res.json(users);
      }
    });
  };
  // -------------------------------------------------------------------------
  //                           Get a user
  // -------------------------------------------------------------------------

  _this.getUser = function(req,res){
    console.log('got to the server controller with user id',req.params.id);
    User.findById(req.params.id,function(err,result){
      if(err){
        console.log('there was an error finding user',err);
        res.json(err);
      } else {
        console.log('successfully found user',result);
        res.json(result)
      }
    })
  }



}

module.exports = new UserController();
