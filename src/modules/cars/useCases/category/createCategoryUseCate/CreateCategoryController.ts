import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body

        try {
            const result = await this.createCategoryUseCase.execute({ name, description })
            return response.status(201).json(result)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ error: error.message })
            }

            console.error(`Internal error: ${error}`);
            return response.status(500).json({ error: "Internal server error" });
        }
    }

}