import User from "../models/User.js";
import bcrypt from "bcryptjs";

class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            returnres.status(500).json({ message: error.message });
        }
    }

    static async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateUser(req, res) {
        try {
            if (req.body.password){
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            
            const user = await User.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default UserController