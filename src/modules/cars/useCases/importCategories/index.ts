import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const cateoriesRepository = CategoriesRepository.getInstance();

const importCategoriesUseCase = new ImportCategoriesUseCase(
  cateoriesRepository
);

const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase
);

export { importCategoriesController };
