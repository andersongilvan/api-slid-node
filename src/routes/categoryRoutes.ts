import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/category/createCategoryUseCate";

const categoryRoute = Router()

categoryRoute.post("/", (request, response) => {
    createCategoryController.handle(request, response)
})

categoryRoute.get("/teste", (request, response) => {
    console.log("teste")
})


export { categoryRoute }