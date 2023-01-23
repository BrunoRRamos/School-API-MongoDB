import mongoose from "mongoose";

const teacherShema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    discipline: {type: String, required: true}
})

const teachers = mongoose.model("teachers")

export default teachers;
