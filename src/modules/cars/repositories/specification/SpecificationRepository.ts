import { PrismaClient, Specification } from "../../../../generated/prisma";
import { CreateSpecificationDto } from "../../DTO/specification/CreateSpecificationDto";
import { ISpecificationRepository } from "./ISpecificationRepository";

export class SpecificationRepository extends PrismaClient implements ISpecificationRepository {

    constructor() {
        super()
    }

    async create({ name, description }: CreateSpecificationDto): Promise<Specification> {
        return await this.specification.create({ data: { name, description } })
    }

    async findByName(name: string): Promise<Specification | null> {
        return this.specification.findFirst({ where: { name } })
    }

    async findById(id: string): Promise<Specification | null> {
        return this.specification.findFirst({ where: { id } })
    }

}