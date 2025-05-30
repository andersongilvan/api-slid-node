import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {

    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }

    async hendle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body

        try {
            const result = await this.createSpecificationUseCase.execute({ name, description })
            return response.status(201).send(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.error(`Internal error: ${error}`);
            return response.status(500).json({ error: "Internal server error" });
        }
    }
}
