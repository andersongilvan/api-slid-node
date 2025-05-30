import { Request, Response } from "express";
import { ImportSpecificationUseCase } from "./ImportSpecificationUseCase";

export class ImportSpecificationController {

    constructor(private importSpecificationUseCase: ImportSpecificationUseCase) { }

    async handle(request: Request, response: Response) {
        const { file } = request
        if (!file) {
            return response.status(400).send({ error: "No file uploaded" });
        }


        try {
            this.importSpecificationUseCase.execute(file)
            return response.status(200).send()
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({ error: error.message })
            }
            console.log(`Internal error ${error}`)
            return response.status(500).send("Internal error")
        }
    }


}