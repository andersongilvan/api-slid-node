import { Category } from "../../../../generated/prisma";
import { CreateCategoryDto } from "../../DTO/category/CreateCategoryDto";


export interface ICategoryRepository {
    create({ name, description }: CreateCategoryDto): Promise<Category>
    findByName(name: string): Promise<Category | null>
    findById(id: string): Promise<Category>
}