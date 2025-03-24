const Controller = require('../Controllers/wishlist.js');
const express = require('express');
const router = express.Router();



router.get('/is_in_wishlist',Controller.Is_in_wishlist);


router.get('/product_details/:id', Controller.Get_wishlist_with_product_details);

router.get('/withname', Controller.get_wishlist_with_name);
router.get('/details/:id', Controller.get_wishlist_details);
router.get('/:id', Controller.getwishlist);
router.get('/', Controller.getwishlists);
router.post('/', Controller.addwishlist);
router.delete('/:id', Controller.deletewishlist);

module.exports = router;