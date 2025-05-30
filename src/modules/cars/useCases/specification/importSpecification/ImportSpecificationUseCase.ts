import fs from "fs"
import { parse } from "csv-parse"
import { ISpecificationRepository } from "../../../repositories/specification/ISpecificationRepository";

interface ISpecifications {
    name: string
    description: string
}

export class ImportSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    async loadSpecification(file: Express.Multer.File): Promise<ISpecifications[]> {

        const specifications: ISpecifications[] = []

        const stream = fs.createReadStream(file.path)

        const parseFile = parse()

        stream.pipe(parseFile)

        for await (const line of parseFile) {
            const [name, description] = line

            specifications.push({ name, description })
        }

        fs.unlinkSync(file.path)

        return specifications

    }

    async execute(file: Express.Multer.File) {

        const specifications = await this.loadSpecification(file)

        specifications.map(async (specification) => {
            const specificationExist = await this.specificationRepository.findByName(specification.name)

            if (!specificationExist) {
                await this.specificationRepository.create({
                    name: specification.name,
                    description: specification.description
                })
            }
        })
    }
}