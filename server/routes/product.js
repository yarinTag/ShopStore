const router = require('express').Router();



const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, getAllProductApi, getProductsCategoryPrice } = require('../controllers/productControllers');
const { isAuthenticated, authorizeRoles } = require('../utils/auth');

router.get('/products', getProducts);

router.get('/product/:id', getSingleProduct);

router.post('/admin/product/new', isAuthenticated, authorizeRoles('admin'), newProduct);

router.put('/admin/product/:id', isAuthenticated, authorizeRoles('admin'), updateProduct);

router.get('/getAllProduct', getAllProductApi);

router.delete('/admin/product/:id', isAuthenticated, authorizeRoles('admin'), deleteProduct);

router.get('/products/getcategoryprice', getProductsCategoryPrice)



module.exports = router;