// routes/adminRoutes.js
import express from "express";
import { registerAdmin, loginAdmin, adminDashboard } from "../controllers/adminController.js";
import { addStudent, getAllStudents } from "../controllers/studentController.js";
import { addPosting, updatePosting, getPostingByStudent } from "../controllers/postingController.js";
import { addInternship, updateInternship, getAllInternships } from "../controllers/internshipController.js";
import { addNotice, getAllNotices, updateNotice, deleteNotice } from "../controllers/noticeController.js";
import { adminAuth } from "../middleware/authMiddleware.js";  // <-- ADD THIS LINE

const router = express.Router();

// Admin
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/dashboard", adminAuth, adminDashboard);

// Student
router.post("/student/add", adminAuth, addStudent);
router.get("/student/all", adminAuth, getAllStudents);

// Posting
router.post("/posting/add", adminAuth, addPosting);
router.put("/posting/update/:id", adminAuth, updatePosting);
router.get("/posting/student/:studentId", adminAuth, getPostingByStudent);

// Internship
router.post("/internship/add", adminAuth, addInternship);
router.put("/internship/update/:id", adminAuth, updateInternship);
router.get("/internship/all", adminAuth, getAllInternships);

// Notices
router.post("/notice/add", adminAuth, addNotice);
router.get("/notice/all", adminAuth, getAllNotices);
router.put("/notice/update/:id", adminAuth, updateNotice);
router.delete("/notice/delete/:id", adminAuth, deleteNotice);

export default router;
