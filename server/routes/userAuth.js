const router = require('express').Router();

const {registerUser, loginUser, logOut} = require('../controllers/userController');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logout',logOut);

module.exports = router; 