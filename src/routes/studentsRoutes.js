import express from "express";
import StudentController from "../controllers/studentsController.js";

const router = express.Router();

router
    .get("/students", StudentController.listStudents)
    .get("/students/:id", StudentController.getStudentById)
    .post("/students", StudentController.createStudent)
    .put("/students/:id", StudentController.updateStudent)
    .delete("/students/:id", StudentController.deleteStudent)

export default router;