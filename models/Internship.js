import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    company: String,
    startDate: Date,
    endDate: Date,
    status: { type: String, default: "Assigned" },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Internship", internshipSchema);
