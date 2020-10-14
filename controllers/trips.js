const Trip = require('../models/trip');

module.exports = {
    index,
    create,
    delete: deleteOne
  };
  
  async function create(req, res) {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  }

  async function index(req, res) {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  }

  async function deleteOne(req, res) {
    const deletedTrip = await Trip.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedTrip);
  }

  