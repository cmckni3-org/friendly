var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  biography: String
});

module.exports = mongoose.model('User', UserSchema);
