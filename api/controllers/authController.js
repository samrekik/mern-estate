const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken')
module.exports.authController = {
  login: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email et mot de passe requis" });
      }

      const existUser = await User.findOne({ email });
      if (existUser)
        return res.status(401).json({ message: "Email déjà utilisé" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      res
        .status(201)
        .json({ message: "Utilisateur créé avec succès", user: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  signIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email et mot de passe requis" });
      }

      const existUser = await User.findOne({ email });
      if (!existUser)
        return res.status(401).json({ message: "Email non existe" });

      const isMatch = await bcrypt.compare(password, existUser.password);
      if (!isMatch)
        return res.status(401).json({ message: "password is not matched" });
const payload={
    id:existUser._id,
    email:existUser.email
};
const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1h",})
      return res
        
        .json({ message: "logged in successfully", token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
