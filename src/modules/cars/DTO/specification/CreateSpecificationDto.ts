export class CreateSpecificationDto {
    readonly name: string
    readonly description: string

    constructor(name: string, description: string) {
        this.name = name
        this.description = description
    }
}