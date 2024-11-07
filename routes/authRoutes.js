const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/signin', authController.getSignIn);
router.get('/signup', authController.getSignUp);
router.post('/signin', authController.postSignIn);
router.post('/signup', authController.postSignUp);
router.get('/signout', authController.signOut);


module.exports = router;
