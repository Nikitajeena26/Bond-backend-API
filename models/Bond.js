import mongoose from "mongoose";

const bondSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    bondStart: Date,
    bondEnd: Date,
    status: { type: String, default: "Assigned" },
    remarks: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Bond", bondSchema);
