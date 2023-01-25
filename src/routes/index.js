import express from "express";
import studentsRoutes from "./studentsRoutes.js"
import teachersRoutes from "./teachersRoutes.js"
import classesRoutes from "./classesRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.staus(200).send({title: "HOME PAGE"})
    });

    app.use(
        express.json(),
        studentsRoutes,
        teachersRoutes,
        classesRoutes
    )
}

export default routes;