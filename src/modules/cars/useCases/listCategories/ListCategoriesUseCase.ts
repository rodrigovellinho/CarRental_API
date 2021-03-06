import { Category } from '../../model/category';
import { ICategoryRepositories } from '../../repositories/ICategoryRepositories';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepositories) {}
  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
