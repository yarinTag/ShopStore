const router = require('express').Router();

const {registerUser, loginUser, logOut,forgotPassword,resetPassword,getUserProfile} = require('../controllers/userController');
const {isAuthenticated} = require('../utils/auth');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/password/forgot',forgotPassword);
router.put('/password/reset/:token',resetPassword);
router.get('/me',isAuthenticated,getUserProfile);
router.get('/logout',logOut);

module.exports = router; 