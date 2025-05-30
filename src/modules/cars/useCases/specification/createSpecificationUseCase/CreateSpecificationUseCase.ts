import { CreateSpecificationDto } from "../../../DTO/specification/CreateSpecificationDto";
import { ListSpecificationDto } from "../../../DTO/specification/ListSpecificationDto";
import { ISpecificationRepository } from "../../../repositories/specification/ISpecificationRepository";

interface IRequest {
    name: string
    description: string
}

export class CreateSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    async execute({ name, description }: IRequest) : Promise<ListSpecificationDto> {
        if (!name || !description) {
            throw new Error("Required fields")
        }

        const specificationExist = await this.specificationRepository.findByName(name)

        if (specificationExist) {
            throw new Error("This specification already exist")
        }

        const specificatioDto = new CreateSpecificationDto(name, description)

        const specificationCreated = await this.specificationRepository.create({
            name: specificatioDto.name,
            description: specificatioDto.description
        })

        return new ListSpecificationDto(specificationCreated)
    }
}