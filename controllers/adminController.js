// controllers/adminController.js
import Admin from "../models/adminModel.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js";
import Bond from "../models/Bond.js";
import Internship from "../models/Internship.js";
import Posting from "../models/Posting.js";

// Register Admin
export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existing = await Admin.findOne({ email });
        if (existing) return res.status(400).json({ message: "Admin already exists" });

        const hashed = await bcrypt.hash(password, 10);
        const admin = await Admin.create({ name, email, password: hashed });
        res.status(201).json({ success: true, admin });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Login Admin
export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.json({ success: true, token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Dashboard
export const adminDashboard = async (req, res) => {
    try {
        const studentCount = await Student.countDocuments();
        const bondCount = await Bond.countDocuments();
        const internshipCount = await Internship.countDocuments();
        const postingCount = await Posting.countDocuments();

        res.json({
            success: true,
            dashboard: { totalStudents: studentCount, totalBonds: bondCount, totalInternships: internshipCount, totalPostings: postingCount }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
