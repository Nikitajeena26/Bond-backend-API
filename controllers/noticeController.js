// controllers/noticeController.js
import Notice from "../models/Notice.js";

// Create Notice
export const addNotice = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res.status(201).json({ success: true, notice });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Notices
export const getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json({ success: true, notices });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Notice
export const updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.json({ success: true, notice });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Notice
export const deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.json({ success: true, message: "Notice deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
