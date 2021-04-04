const router = require('express').Router();



const {getProducts,newProduct,getSingleProduct,updateProduct,deleteProduct} = require('../controllers/productControllers');
const {isAuthenticated,authorizeRoles} = require('../utils/auth');

router.get('/products',isAuthenticated,getProducts);

router.get('/product/:id',getSingleProduct);

router.post('/admin/product/new',newProduct,isAuthenticated,authorizeRoles('admin'));

router.put('/admin/product/:id',updateProduct,isAuthenticated,authorizeRoles('admin'));

router.delete('/admin/product/:id',deleteProduct,isAuthenticated,authorizeRoles('admin'));


module.exports = router;