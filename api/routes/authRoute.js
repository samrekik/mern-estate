const express=require('express');
const { authController } = require('../controllers/authController');
const route=express.Router();
route.post('/login',authController.login)
route.post('/signIn',authController.signIn)
module.exports.authRoute=route;