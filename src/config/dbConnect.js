import mongoose from "mongoose";

mongoose.connect("mongodb+srv://MisterBeamCs:Selmamaria31@school-api.k3bjsup.mongodb.net/School-API?");

let db = mongoose.connection;

export default db;