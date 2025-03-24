const Controller = require('../Controllers/products.js');
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

const productUpload = upload.fields([
    { name: 'product_image_main', maxCount: 1 },  // For main image
    { name: 'product_images', maxCount: 3 },    // For multiple sub images (adjust count as needed)
  ]);

  router.get('/for_front/productwithdetails', Controller.products_with_details_for_front);

  router.get('/productbycategory/:id', Controller.getproductbycategory);
router.get('/productwithdetails', Controller.productswithdetails);
router.get('/:id', Controller.getproduct);
router.get('/', Controller.getproducts);

router.put('/:id',productUpload,Controller.updateproduct);

router.post('/',productUpload,Controller.addproduct);
router.delete('/:id', Controller.deleteproduct);

module.exports = router;
