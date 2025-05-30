import { Category, PrismaClient } from "../../../../generated/prisma";
import { CreateCategoryDto } from "../../DTO/category/CreateCategoryDto";
import { ICategoryRepository } from "./ICategoryRepository";

export class CategoryRepository extends PrismaClient implements ICategoryRepository {

    constructor() {
        super()
    }

    async create({ name, description }: CreateCategoryDto): Promise<Category> {

        const createCategory: Category = await this.category.create({ data: { name, description } })

        return createCategory

    }
    async findByName(name: string): Promise<Category | null> {

        return await this.category.findFirst({ where: { name } })

    }
    findById(id: string): Promise<Category> {
        throw new Error("Method not implemented.");
    }

}