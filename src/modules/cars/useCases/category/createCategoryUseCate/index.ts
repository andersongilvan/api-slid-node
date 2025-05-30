import { CategoryRepository } from "../../../repositories/category/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoryRepository = new CategoryRepository()

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }