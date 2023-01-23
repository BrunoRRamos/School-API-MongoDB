import express from "express";
import studentsRoutes from "./studentsRoutes.js"
import teachersRoutes from "./teachersRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.staus(200).send({title: "HOME PAGE"})
    });

    app.use(
        express.json(),
        studentsRoutes,
        teachersRoutes
    )
}

export default routes;