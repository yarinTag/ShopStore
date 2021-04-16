const router = require('express').Router();

const { registerUser, loginUser, logOut, forgotPassword, resetPassword, getUserProfile, changePassword, updateProfile, allUsers, getUserDetails, updateUser, deleteUser } = require('../controllers/userController');
const { isAuthenticated, authorizeRoles } = require('../utils/auth');
const { scrape } = require('../controllers/userController')

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);

router.get('/me', isAuthenticated, getUserProfile);
router.put('/password/update', isAuthenticated, changePassword);
router.put('/me/update', isAuthenticated, updateProfile);

router.get('/admin/users',isAuthenticated,authorizeRoles('admin'),allUsers);
router.get('/admin/user/:id',isAuthenticated,authorizeRoles('admin'),getUserDetails);
router.put('/admin/user/:id',isAuthenticated,authorizeRoles('admin'),updateUser);
router.delete('/admin/user/:id',isAuthenticated,authorizeRoles('admin'),deleteUser);


router.get('/scrape', scrape);


router.get('/logout', logOut);


//-----angular------//
router.get('/admin/allusers',allUsers);
router.put('/user/edit/:id',updateUser);
router.delete('/user/delete/:id',deleteUser);
module.exports = router;