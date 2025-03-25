const Controller = require('../Controllers/orders.js');
const express = require('express');

const router = express.Router();


router.get('/detailofspecific/:id', Controller.get_specific_order_with_details);

router.get('/details', Controller.getorderswithdetails);
router.get('/:id', Controller.getorder);
router.get('/', Controller.getorders);
router.post('/', Controller.addOrder);
router.put('/:id', Controller.updateorder);
router.delete('/:id', Controller.deleteorder);

module.exports = router;