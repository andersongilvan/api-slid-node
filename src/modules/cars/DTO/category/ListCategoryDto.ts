import { Category } from "../../../../generated/prisma";

export class ListCategoryDto {
    readonly id: string
    name: string
    description: string

    constructor(category: Category) {
        this.id = category.id
        this.name = category.name
        this.description = category.description
    }
}