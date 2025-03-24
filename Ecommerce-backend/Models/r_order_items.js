const Controller = require('../Controllers/order_items.js');
const express = require('express');
const router = express.Router();

router.get('/details/:id', Controller.getorder_items_with_details);
router.get('/:id', Controller.getorder_items);
router.get('/', Controller.getorder_item);
router.post('/', Controller.addorder_items);
// router.put('/updateorder_item/:id', Controller.updateorder_items);
router.delete('/:id', Controller.deleteorder_items);

module.exports = router;