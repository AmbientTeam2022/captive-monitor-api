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
  },
  params: {
    soilHumidity    : {min: 50, max: 70},
    soilTemperature : {min: 25, max: 30},
    roomHumidity    : {min: 77, max: 77},
    roomTemperature : {min: 22, max: 22},
    waterLevel      : {min: 10, max: 99},
    waterTemperature: {min: 20, max: 28}
  }
});

newTank.save(function (err) {
  if (err) return handleError(err);

  console.log('Datos guardados con éxito');
  process.exit();
});
