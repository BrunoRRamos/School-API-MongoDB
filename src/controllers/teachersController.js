import teachers from "../models/teacher.js"

class TeacherController {
    static listTeachers = (req, res) => {
        teachers.find((err, teacher) => {
            res.status(200).json(teacher);
        });
    }

    static getTeacherById = (req, res) => {
        const id = req.params.id;
        teachers.findById(id, (err, teacher) => {
            err ? res.status(400).send({Message: `${err.Message} - Author Not Found - Invalid ID`}) : res.status(200).send(teacher);
        });
    }

    static createTeacher = (req, res) => {
        let teacher = new teachers(req.body);
        teacher.save((err) => {
            err ? res.status(500).send(`Message: ${err.message} - POST error`) : res.status(201).send(`Sucess POST`);
        });
    }

    static updateTeacher = (req, res) => {
        const id = req.params.id;
        teachers.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            !err ? res.status(200).send('Sucess PUT') : res.status(500).send({message: `${err.message} - PUT error`});
        });
    }

    static deleteTeacher = (req, res) => {
        const id = req.params.id;
        teachers.findByIdAndDelete(id, (err) => {
            err ? res.status(500).send(`Message: ${err.message} - DELETE error`) : res.status(200).send(`Sucess DELETE`);
        });
    }
}

export default TeacherController;