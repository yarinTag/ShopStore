const router = require('express').Router();

const {registerUser, loginUser, logOut,forgotPassword} = require('../controllers/userController');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/password/forgot',forgotPassword);
router.get('/logout',logOut);

module.exports = router; 