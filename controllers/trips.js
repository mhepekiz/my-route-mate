const Trip = require('../models/trip');


module.exports = {
    index,
    create,
  };
  
  async function create(req, res) {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  }

  async function index(req, res) {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  }

  