import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {

    constructor(private listCategoryUseCase: ListCategoryUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const result = await this.listCategoryUseCase.execute()
            return response.status(200).json(result)
        } catch (error) {
            console.log(`Internal error ${error}`)
            return response.status(500).json({ error: error })
        }
    }
}