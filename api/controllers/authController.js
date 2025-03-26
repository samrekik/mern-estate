const User = require("../models/userModel");
const bcrypt=require('bcryptjs')
module.exports.authController={
    login:async(req,res)=>{
        const {username,email,password}=req.body;
        try {
            if (!email || !password) {
                return res.status(400).json({ message: "Email et mot de passe requis" });
            }
    
            const existUser = await User.findOne({ email });
            if (existUser) return res.status(401).json({ message: "Email déjà utilisé" });
    
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ username, email, password: hashedPassword });
    
            res.status(201).json({ message: "Utilisateur créé avec succès", user: newUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}