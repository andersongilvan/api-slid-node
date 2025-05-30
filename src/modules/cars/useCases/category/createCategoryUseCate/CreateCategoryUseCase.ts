import { ListCategoryDto } from "../../../DTO/category/ListCategoryDto";
import { ICategoryRepository } from "../../../repositories/category/ICategoryRepository";


interface IRequest {
    name: string
    description: string
}


export class CreateCategoryUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }

    async execute({ name, description }: IRequest): Promise<ListCategoryDto> {

        if (!name || !description) {
            throw new Error("Required fields")
        }

        const categoryExist = await this.categoryRepository.findByName(name)

        if (categoryExist) {
            throw new Error("This category already exist")
        }

        const categoryCreate = await this.categoryRepository.create({ name, description })


        return new ListCategoryDto(categoryCreate)
    }

}