import { categoryRepository } from "../../repositories/category";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)

const listCategoryController = new ListCategoryController(listCategoryUseCase)

export { listCategoryController }