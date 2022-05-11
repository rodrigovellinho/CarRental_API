import { Category } from '../model/category';
import {
  ICategoryRepositories,
  ICreateCategoryDTO,
} from './ICategoryRepositories';

class PostgressCategortRepository implements ICategoryRepositories {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
    return null;
  }
}

export { PostgressCategortRepository };
