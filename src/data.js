const mongoose = require('mongoose');
const Tank = require('./api/model/TankModel');

mongoose.connect('mongodb://localhost:27017/cmonitor');

const newTank = new Tank({
  uuid: 12345,
  name: 'Terrario de lagartijas',
  iconId: 4,
  state: {
    soilHumidity    : 30,
    soilTemperature : 24,
    roomHumidity    : 52,
    roomTemperature : 26,
    waterLevel      : 0,
    waterTemperature: 0
  }
});

newTank.save(function (err) {
  if (err) return handleError(err);
});
