'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(re.test(email));
  return re.test(email)
};

var UserSchema = new Schema({
  userName: {
    type: String,
    required: 'Kindly enter the user name'
  },
  password: {
    type: String
  },
  userFirstName: {
    type: String,
    required: 'Kindly enter the user first name'
  },
  userLastName: {
    type: String,
    required: 'Kindly enter the user last name'
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Kindly enter a valid email address / validate'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Kindly enter a valid email address / match']
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    required: 'Kindly choose user status',
    default: false
  },
  userRole: {
    type: [{
      type: String,
      enum: ['siterka', 'roditelj', 'agencija']
    }],
    required: 'Kindly choose user role',
    default: ['siterka']
  }
});

module.exports = mongoose.model('Users', UserSchema);