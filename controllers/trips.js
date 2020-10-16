const Trip = require('../models/trip');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update,
  };
  
  async function create(req, res) {
    // Assign the logged in user's _id
    req.body.userid = req.user._id;
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  }

  async function index(req, res) {
    let method = { startDate : -1 };
    const trips = await Trip.find({}).sort(method);
    res.status(200).json(trips);
  }
  

  async function deleteOne(req, res) {
    const deletedTrip = await Trip.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedTrip);
  }

  async function update(req, res) {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedTrip);
  }
  

  