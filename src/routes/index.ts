import express, { Express } from "express"
import { categoryRoute } from "./categoryRoutes"
import { specificationRoute } from "./specificationRoute"
import swaggerUi from "swagger-ui-express"
import swaggerFile from "../swagger.json"


export const routes = (app: Express) => {
    app.use(express.json());

    app.get("/", (request, response) => {
        response.status(200).send({ message: "API Solid Node JS" })
    });

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

    app.use("/categories", categoryRoute)
    app.use("/specification", specificationRoute)
}