'use strict';
module.exports = function(app) {
  var users = require('../controllers/usersController');
  // users Routes
  app.route('/users')
    .get(users.userList)
    .post(users.createUser);
  app.route('/users/:userId')
    .get(users.readUser)
    .put(users.updateUser)
    .delete(users.deleteUser);
};