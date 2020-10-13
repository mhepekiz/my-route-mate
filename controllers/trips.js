const Trip = require('../models/trip');


module.exports = {
    create,
  };
  
  async function create(req, res) {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  }