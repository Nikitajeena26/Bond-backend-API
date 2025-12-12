// controllers/internshipController.js
import Internship from "../models/Internship.js";

// Add Internship
export const addInternship = async (req, res) => {
  try {
    const internship = await Internship.create(req.body);
    res.status(201).json({ success: true, internship });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Internship
export const updateInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!internship) return res.status(404).json({ message: "Internship not found" });
    res.json({ success: true, internship });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Internships
export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find().populate("studentId");
    res.json({ success: true, internships });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

