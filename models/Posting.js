import mongoose from "mongoose";

const postingSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    location: String,
    department: String,
    joiningDate: Date,
    status: {
        type: String,
        default: "Posted"
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Posting", postingSchema);
