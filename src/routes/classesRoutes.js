import express from "express";
import ClassesController from "../controllers/classController.js";

const router = express.Router()

router
    .get("/classes", ClassesController.listClasses)
    .get("/classes/:id", ClassesController.getClassById)
    .post("/classes", ClassesController.createClass)
    .put("/classes/:id", ClassesController.updateClass)
    .delete("/classes/:id", ClassesController.deleteClass)

export default router;