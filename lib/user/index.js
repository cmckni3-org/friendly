var mongoose = require('mongoose');

var User = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  biography: String
});

module.exports = User;
