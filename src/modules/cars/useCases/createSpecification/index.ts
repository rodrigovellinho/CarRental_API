import { SpecificationRepository } from '../../repositories/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepositories = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepositories
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
