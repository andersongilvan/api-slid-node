import express, { Express } from "express"
import { categoryRoute } from "./categoryRoutes"
import { specificationRoute } from "./specificationRoute"

export const routes = (app: Express) => {
    app.use(express.json());

    app.get("/", (request, response) => {
        response.status(200).send({ message: "API Solid Node JS" })
    });

    app.use("/categories", categoryRoute)
    app.use("/specification", specificationRoute)
}