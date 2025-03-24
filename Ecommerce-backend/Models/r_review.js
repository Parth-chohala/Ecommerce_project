const Controller = require('../Controllers/reviews.js');
const express = require('express');
const router = express.Router();


router.get('/allavg/:id', Controller.get_reviews_with_all_avgs);


    
router.get('/detail/:id', Controller.get_reviews_with_details);
router.get('/:id', Controller.getreviews);
router.get('/', Controller.getallreviews);
router.post('/', Controller.addreview);
router.put('/:id', Controller.updatereview);
router.delete('/:id', Controller.deletereview);

module.exports = router;