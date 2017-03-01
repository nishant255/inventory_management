var JwtStrategy = require('passport-jwt').Strategy;

// load up the user model
var User = require('./../models/user_model');

module.exports = function(passport) {
  var opts = {};
  opts.secretOrKey = "INVENTORY_SECRET";
  // passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  //   User.findOne({id: jwt_payload.id}, function(err, user) {
  //         if (err) {
  //             return done(err, false);
  //         }
  //         if (user) {
  //             done(null, user);
  //         } else {
  //             done(null, false);
  //         }
  //     });
  // }));
};
