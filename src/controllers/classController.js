import classes from "../models/class.js"

class ClassesController {
    
    static listClasses = (req, res) => {
        classes
        .find()
        .populate("teacher")
        .exec((err, classes) => {
            res.status(200).json(classes);
        });
    }

    static getClassById = (req, res) => {
        const id = req.params.id;

        classes
        .findById(id)
        .populate("teacher")
        .exec((err, classes) => {
            err ? res.status(400).send({Message: `${err.message} - Class Not Found - Invalid ID`}) : res.status(200).send(classes);
        });
    }

    static createClass = (req, res) => {
        let schoolClass = new classes(req.body);
        schoolClass.save((err) => {
            err ? res.status(500).send({message: `${err.message} - POST error`}) : res.status(201).send({Message: "Sucess POST"});
        });
    }

    static updateClass = (req, res) => {
        const id = req.params.id;
        classes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            err ? res.status(500).send({Message: `${err.message} - PUT error`}) : res.status(200).send({Message: "Sucess PUT"})
        });
    }

    static deleteClass = (req, res) => {
        const id = req.params;
        classes.findByIdAndDelete(id, (err) => {
            err ? res.status(500).send(`Message: ${err.message} - DELETE error`) : res.status(200).send(`Sucess DELETE`);
        });
    }
}

export default ClassesController;