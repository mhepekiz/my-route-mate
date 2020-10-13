const express = require('express');
const router = express.Router();
const tripsCtrl = require('../../controllers/trips');

/*---------- Public Routes ----------*/
router.post('/addtrip', tripsCtrl.create);



module.exports = router;