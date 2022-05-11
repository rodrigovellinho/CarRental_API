import { Category } from '../model/category';

// DTO - Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepositories {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepositories, ICreateCategoryDTO };
