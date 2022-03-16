import { Specification } from "../model/Specification";

interface ISpecificationsRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ISpecificationsRepositoryDTO): void;
}

export { ISpecificationsRepository, ISpecificationsRepositoryDTO };
