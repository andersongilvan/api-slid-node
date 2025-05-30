import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/specification/createSpecificationUseCase";
import { uploadFile } from "../middleware/multer/import";
import { importSpecificationController } from "../modules/cars/useCases/specification/importSpecification";

const specificationRoute = Router()

specificationRoute.post("/", (request, response) => {
    createSpecificationController.hendle(request, response)
})

specificationRoute.post("/import", uploadFile, (request, response) => {
    importSpecificationController.handle(request, response)
})


export { specificationRoute }