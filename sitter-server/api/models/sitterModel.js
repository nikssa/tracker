'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sitterUserSchema = new Schema({
    sitterUserType: {
      type: [{
        type: String,
        enum: ['Bebisiterka', 'Dadilja']
      }],
      required: 'Kindly enter sitter type'
    }
});

module.exports = mongoose.model('Sitters', sitterUserSchema);