import { ListCategoryDto } from "../../DTO/category/ListCategoryDto";
import { ICategoryRepository } from "../../repositories/category/ICategoryRepository";

export class ListCategoryUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    async execute() : Promise<ListCategoryDto[]> {

        const allCategories = await this.categoryRepository.findAll()
        console.log(allCategories)

       return allCategories.map((category) => new ListCategoryDto(category))
    }
}