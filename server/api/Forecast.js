var express = require('express');
var Forecast = require('../models/forecast');

var router = express.Router();

router.get('/:city', (req, res) => {
  var city = req.params.city;

  Forecast.retrieveByCity(city, (err, forecast) => {
    if (err)
      return res.json(err);
    return res.json(forecast);
  });
});

module.exports = router;