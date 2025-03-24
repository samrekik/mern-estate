const usersModel = require("../models/userModel");

const findAll = async (req, res) => {
  try {
    const response = await usersModel.find();
    res.send({
      total: response.length,
      users: response,
    });
  } catch (error) {
    res
      .status(401)
      .send({ error: error.message });
  }
};
module.exports.usersController = {
    findAll,
   
  };
  