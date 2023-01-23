import students from "../models/student.js";

class StudentController {
    static listStudents = (req, res) => {
        students.find((err, students) => {
            res.status(200).json(students);
        });
    }

    static getStudentById = (req, res) => {
        const id = req.params.id;
        students.findById(id, (err, student) => {
            err ? res.status(400).send({Message: `${err.Message} - Student Not Found - Invalid ID`}) : res.status(200).send(student);
        });
    }

    static createStudent = (req, res) => {
        let student = new students(req.body);
        student.save((err) => {
            err ? res.status(500).send(`Message: ${err.Message} - POST error`) : res.status(201).send({Message: "Sucess POST"});
        });
    }

    static updateStudent = (req, res) => {
        const id = req.params.id;
        students.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            err ? res.status(500).send({Message: `${err.Message} - PUT error`}) : res.status(200).send({Message: "Sucess PUT"});
        });
    }

    static deleteStudent = (req, res) => {
        const id = req.params.id;
        students.findByIdAndDelete(id, (err) => {
            err ? res.status(500).send({Message: `${err.Message}`}) : res.status(200).send({Message: "Sucess DELETE"});
        });
    }
}

export default StudentController;