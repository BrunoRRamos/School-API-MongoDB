import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const DBSTRING = process.env.DBSTRINGCONNECT;
mongoose.connect(`${DBSTRING}`);

let db = mongoose.connection;

export default db;