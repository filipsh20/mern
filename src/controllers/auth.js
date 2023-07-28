import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const passwordHashed = await bcrypt.hash(password, 10);
        console.log(username, email ,password)
        const newUser = new User({ username, email, password: passwordHashed });

        const savedUser = await newUser.save();
        delete savedUser.password
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: "Error registering, try later" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: 'User does not exists' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'User does not exists' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_AUTH);
        delete user.password;
        res.status(200).json({ token, user })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}