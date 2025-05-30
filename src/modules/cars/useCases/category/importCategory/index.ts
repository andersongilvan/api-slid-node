import { CategoryRepository } from "../../../repositories/category/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


const categoryRepositoy = new CategoryRepository()

const importCategoryUseCase = new ImportCategoryUseCase(categoryRepositoy)

const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }