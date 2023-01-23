import mongoose from "mongoose";

const studentShema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    class: {type: String, required: true},
    active: {type: Boolean, required: true},
    aproved: {type: Boolean, required: true}
})

const students = mongoose.model("students", studentShema);

export default students;