'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var agencyUserSchema = new Schema({
    agencyUserName: {
      name: [{
        type: String,
        enum: ['Bebisiterka', 'Dadilja']
      }],
      required: 'Kindly enter agency name'
    }
});

module.exports = mongoose.model('Agencies', agencyUserSchema);