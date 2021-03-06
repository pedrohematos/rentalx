import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    try {
      this.createCategoryUseCase.execute({ name, description });
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateCategoryController };
