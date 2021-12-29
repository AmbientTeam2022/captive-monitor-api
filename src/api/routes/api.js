var express = require('express');
const TankController = require('../controller/TankController');

var router = express.Router();

//Desde android
router.get("/list", TankController.listTanks);
router.get("/monitor/:tankId", TankController.monitor);
router.post("/save", TankController.saveTank);

//Desde arduino
router.post("/update/:tankId", TankController.updateTank);

//Debug
router.get("/debug/list", TankController.debugList);

module.exports = router;
