const express = require("express");
const  {usersController}  = require("../controllers/userController");
const router = express.Router();

router.get("/users", usersController.findAll);

module.exports.usersRouter = router;
