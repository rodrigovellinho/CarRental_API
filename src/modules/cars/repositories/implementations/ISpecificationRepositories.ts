import { Specification } from '../../model/specification';

// DTO - Data Transfer Object
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepositories {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepositories, ICreateSpecificationDTO };
