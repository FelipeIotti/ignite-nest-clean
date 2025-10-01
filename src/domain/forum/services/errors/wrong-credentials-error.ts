import { ServiceError } from '@/core/errors/error.service';

export class WrongCredentialsError extends Error implements ServiceError {
  constructor() {
    super(`Credentials are not valid.`);
  }
}
