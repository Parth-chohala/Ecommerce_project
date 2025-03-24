const Controller = require('../Controllers/cart.js');
const express = require('express');
const router = express.Router();


router.get('/with_details/:id', Controller.get_cart_with_all_details);

router.get('/is_in_cart', Controller.Is_in_cart);

router.get('/:id', Controller.getcart);
router.get('/', Controller.getcarts);
router.post('/', Controller.addcart);
router.put('/:id', Controller.updatecart);
router.delete('/:id', Controller.deletecart);

module.exports = router;