import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/category/createCategoryUseCate";
import { importCategoryController } from "../modules/cars/useCases/category/importCategory";
import { uploadFile } from "../middleware/multer/import";

const categoryRoute = Router()

categoryRoute.post("/", (request, response) => {
    createCategoryController.handle(request, response)
})

categoryRoute.post("/import", uploadFile, (request, response) => {
    importCategoryController.handle(request, response)
})




export { categoryRoute }