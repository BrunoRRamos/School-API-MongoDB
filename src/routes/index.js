import express from "express";
import studentsRoutes from "./studentsRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.staus(200).send({title: "HOME PAGE"})
    });

    app.use(
        express.json(),
        studentsRoutes
    )
}

export default routes;