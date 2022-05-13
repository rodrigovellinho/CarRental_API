import { Category } from '../model/category';
import { Specification } from '../model/specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepositories,
} from './implementations/ISpecificationRepositories';

class SpecificationRepository implements ISpecificationsRepositories {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string) {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationRepository };
