// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const accessControl = require("../utils/access-control").accessControl;

const setAccessControl = (access_type) => {
    return (req, res, next) => {
        accessControl(access_type, req, res, next);
    }
};

router.post('/Signin', setAccessControl('*'), authController.login);
router.post('/forgot-password', setAccessControl('*'), authController.forgotPasswordController);
router.patch('/reset-password',setAccessControl('*'),authController.passwordResetController);
router.post('/logout',setAccessControl('*'),authController.logout)

module.exports = router;


