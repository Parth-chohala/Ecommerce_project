const Controller = require('../Controllers/admin.js');
const express = require('express');
const router = express.Router();

router.get('/:id', Controller.getadmin);
router.get('/', Controller.getadmins);
router.post('/', Controller.addadmin);
router.put('/:id', Controller.updateadmin);
router.delete('/:id', Controller.deleteadmin);

module.exports = router;