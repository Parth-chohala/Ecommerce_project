const Controller = require('../Controllers/categorys.js');
const express = require('express');
const router = express.Router();
const multer= require('multer')


const storage= multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "./images");
    },
    filename: function(req,file,cb){
        cb(null,`${file.fieldname}-${Date.now()}${file.originalname}`);
    },
});

//Create a instance of multer with specified storage setting
const upload=multer({storage});


router.get('/for_front', Controller.get_categorys_for_front);
router.get('/:id',Controller.getcategory);
router.get('/', Controller.getcategorys);
router.post('/',upload.single('category_image'), Controller.addcategory);
router.put('/:id',upload.single('category_image'), Controller.updatecategory);
router.delete('/:id', Controller.deletecategory);

module.exports = router;