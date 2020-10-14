const express = require('express');
const router = express.Router();
const tripsCtrl = require('../../controllers/trips');

/*---------- Public Routes ----------*/
router.post('/', tripsCtrl.create);
router.get('/', tripsCtrl.index);
router.delete('/:id', tripsCtrl.delete);
router.put('/:id', tripsCtrl.update);



module.exports = router;