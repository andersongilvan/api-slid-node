import { specificationRepository } from "../../../repositories/specification";
import { ImportSpecificationController } from "./ImportSpecificationController";
import { ImportSpecificationUseCase } from "./ImportSpecificationUseCase";


const importSpecificationUseCase = new ImportSpecificationUseCase(specificationRepository)

const importSpecificationController = new ImportSpecificationController(importSpecificationUseCase)


export { importSpecificationController }