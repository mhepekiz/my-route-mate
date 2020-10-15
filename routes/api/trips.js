const express = require('express');
const router = express.Router();
const tripsCtrl = require('../../controllers/trips');

/*---------- Public Routes ----------*/
router.get('/', tripsCtrl.index);
router.delete('/:id', tripsCtrl.delete);
router.put('/:id', tripsCtrl.update);


/*---------- Protected Routes -------*/
router.use(require('../../config/auth'));
router.post('/', tripsCtrl.create);

module.exports = router;