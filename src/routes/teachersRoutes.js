import express from "express";
import TeacherController from "../controllers/teachersController.js";

const router = express.Router();

router
    .get("/teachers", TeacherController.listTeachers)
    .get("/teachers/:id", TeacherController.getTeacherById)
    .post("/teachers", TeacherController.createTeacher)
    .put("/teachers/:id", TeacherController.updateTeacher)
    .delete("/teachers/:id", TeacherController.deleteTeacher)

export default router;