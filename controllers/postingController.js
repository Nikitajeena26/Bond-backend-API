import Posting from "../models/Posting.js";

export const addPosting = async (req, res) => {
    try {
        const posting = await Posting.create(req.body);
        res.json({ success: true, posting });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const updatePosting = async (req, res) => {
    try {
        const posting = await Posting.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({ success: true, posting });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const getPostingByStudent = async (req, res) => {
    try {
        const posting = await Posting.find({ studentId: req.params.studentId })
                                     .populate("studentId");

        res.json({ success: true, posting });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
