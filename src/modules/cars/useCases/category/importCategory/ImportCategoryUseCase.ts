import { CategoryRepository } from "../../../repositories/category/CategoryRepository";
import fs from "fs"
import { parse } from "csv-parse";

interface ICategory {
    name: string
    description: string
}

export class ImportCategoryUseCase {

    constructor(private categoryRepository: CategoryRepository) { }


    async loadCategory(file: Express.Multer.File): Promise<ICategory[]> {

        const categories: ICategory[] = []

        const stream = fs.createReadStream(file.path)

        const parseFile = parse()

        stream.pipe(parseFile)

        for await (const line of parseFile) {
            const [name, description] = line
            categories.push({ name, description })
        }

        fs.unlinkSync(file.path)
        return categories

    }

    async execute(file: Express.Multer.File): Promise<void> {

        const categories = await this.loadCategory(file)

        categories.map(async (category) => {
            const categoryExist = await this.categoryRepository.findByName(category.name)
            if (!categoryExist) {
                await this.categoryRepository.create({
                    name: category.name,
                    description: category.description
                })
            }
        })
    }
}