import mongoose from "mongoose";

const classShema = new mongoose.Schema({
    id: {type: String},
    discipline: {type: String, required: true},
    maxStudents: {type: Number, required: true},
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: "teachers", required: true}
});

const classes = mongoose.model("classes", classShema);

export default classes;