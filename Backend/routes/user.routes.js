const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controllers/user.controller');
// const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
)

/**
 * @route POST /users/login
 * @description Login a user with email and password
 * @access Public
 * @body {string} email - User's email
 * @body {string} password - User's password
 * @returns {object} - Auth token and user details
 */
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)

// router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

// router.get('/logout', authMiddleware.authUser, userController.logoutUser)



module.exports = router;