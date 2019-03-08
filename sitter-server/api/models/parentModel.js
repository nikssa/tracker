'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var parentUserSchema = new Schema({
    requiredUserType: {
      type: [{
        type: String,
        enum: ['Bebisiterka', 'Dadilja']
      }],
      required: 'Kindly enter sitter type'
    }
});

module.exports = mongoose.model('Parents', parentUserSchema);