//mongoose.js
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// var Schema = mongoose.Schema;

// var UserSchema = new Schema({});

// mongoose.connect(process.env.MONGODB_URI);

// module.exports = {mongoose};

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);