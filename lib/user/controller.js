var User = require('models/user');

exports.index = function(req, res, next) {
  var promise = User.find({}).exec();
  promise.then(function(users) {
    res.json(users);
  }, function(err) {
    err.status = 500;
    next(err);
  });
};
