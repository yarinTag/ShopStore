const router = require('express').Router();



const {getProducts,newProduct,getSingleProduct,updateProduct} = require('../controllers/productControllers');

router.get('/products',getProducts);

router.get('/product/:id',getSingleProduct);

router.post('/admin/product/new',newProduct);

router.put('/admin/product/:id',updateProduct);



module.exports = router;