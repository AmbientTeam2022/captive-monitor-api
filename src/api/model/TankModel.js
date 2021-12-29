'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TankSchema = new Schema({
  uuid: String,
  name: {type: String, default: 'Nuevo ambiente'},
  iconId: Number,
  actionCache: String,
  state: {
    soilHumidity    : Number,
    soilTemperature : Number,
    roomHumidity    : Number,
    roomTemperature : Number,
    waterLevel      : Number,
    waterTemperature: Number
  },
  params: {
    soilHumidity    : {min: Number, max: Number},
    soilTemperature : {min: Number, max: Number},
    roomHumidity    : {min: Number, max: Number},
    roomTemperature : {min: Number, max: Number},
    waterLevel      : {min: Number, max: Number},
    waterTemperature: {min: Number, max: Number}
  }
});

module.exports = mongoose.model('TankModel', TankSchema);
