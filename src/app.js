import express from "express";
import db from "./config/dbConnect.js";
import rourtes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection Error"));
db.once("open", () => {
    console.log("Connected to DataBase")
});

const app = express();
app.use(express.json());
rourtes(app);

export default app;