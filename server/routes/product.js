const router = require('express').Router();



const {getProducts,newProduct,getSingleProduct,updateProduct,deleteProduct} = require('../controllers/productControllers');
const {isAuthenticated,authorizeRoles} = require('../utils/auth');

router.get('/products',isAuthenticated,getProducts);

router.get('/product/:id',getSingleProduct);

router.post('/admin/product/new',isAuthenticated,authorizeRoles('admin'),newProduct);

router.put('/admin/product/:id',isAuthenticated,authorizeRoles('admin'),updateProduct);

router.delete('/admin/product/:id',isAuthenticated,authorizeRoles('admin'),deleteProduct);


module.exports = router;