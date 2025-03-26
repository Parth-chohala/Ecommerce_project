const Controller = require('../Controllers/customers.js');
const express = require('express');
const router = express.Router();

router.get('/auth', Controller.get_user_auth);
router.get('/:id', Controller.getcustomer);
router.get('/', Controller.getcustomers);
router.post('/', Controller.addcustomer);
router.put('/:id', Controller.updatecustomer);
router.delete('/:id', Controller.deletecustomer);

module.exports = router;