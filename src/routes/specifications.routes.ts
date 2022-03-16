import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateSpecificationService(
    specificationsRepository
  );

  try {
    createCategoryService.execute({ name, description });
    return res.status(201).send();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

specificationsRoutes.get("/", (req, res) => {
  const all = specificationsRepository.list();

  return res.json(all);
});

export { specificationsRoutes };
