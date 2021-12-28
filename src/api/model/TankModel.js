'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TankSchema = new Schema({
  uuid: String,
  name: String,
  iconId: Number,
  actionCache: String,
  state: {
    soilHumidity    : Number,
    soilTemperature : Number,
    roomHumidity    : Number,
    roomTemperature : Number,
    waterLevel      : Number,
    waterTemperature: Number
  }
});

module.exports = mongoose.model('TankModel', TankSchema);
