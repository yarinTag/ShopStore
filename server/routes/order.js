const router = require('express').Router();

const {newOrder, getSingleOrder, myOrder} = require('../controllers/orderController');
const {isAuthenticated,authorizeRoles} = require('../utils/auth');

router.post('/order/new',isAuthenticated, newOrder);
router.get('/order/:id',isAuthenticated,getSingleOrder);
router.get('/orders/me',isAuthenticated,myOrder);

module.exports = router;