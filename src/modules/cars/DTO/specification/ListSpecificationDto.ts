import { Specification } from "../../../../generated/prisma"

export class ListSpecificationDto {
    readonly id: string
    readonly name: string
    readonly description: string

    constructor(specification: Specification) {
        this.id = specification.id
        this.name = specification.name
        this.description = specification.description
    }
}