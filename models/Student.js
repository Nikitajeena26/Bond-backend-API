import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    rollNo: String,
    department: String,
    semester: String,

    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Student", studentSchema);
