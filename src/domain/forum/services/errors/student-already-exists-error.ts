import { ServiceError } from '@/core/errors/error.service';

export class StudentAlreadyExistsError extends Error implements ServiceError {
  constructor(identifier: string) {
    super(`Student "${identifier}" already exists.`);
  }
}
