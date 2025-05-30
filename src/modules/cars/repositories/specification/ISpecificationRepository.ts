import { Specification } from "../../../../generated/prisma";
import { CreateSpecificationDto } from "../../DTO/specification/CreateSpecificationDto";

export interface ISpecificationRepository {
    create({ name, description }: CreateSpecificationDto): Promise<Specification>
    findByName(name: string): Promise<Specification | null>
    findById(id: string): Promise<Specification | null>
}