import { Either, left, right } from '@/core/entities/either';
import { Injectable } from '@nestjs/common';
import { Encrypter } from '../cryptography/encrypter';
import { HashComparer } from '../cryptography/hash-compare';
import { StudentsRepository } from '../repositories/student.repository';
import { WrongCredentialsError } from './errors/wrong-credentials-error';

interface AuthenticateStudentServiceRequest {
  email: string;
  password: string;
}

type AuthenticateStudentServiceResponse = Either<
  WrongCredentialsError,
  {
    accessToken: string;
  }
>;

@Injectable()
export class AuthenticateStudentService {
  constructor(
    private studentsRepository: StudentsRepository,
    private hashComparer: HashComparer,
    private encrypter: Encrypter,
  ) {}

  async execute({
    email,
    password,
  }: AuthenticateStudentServiceRequest): Promise<AuthenticateStudentServiceResponse> {
    const student = await this.studentsRepository.findByEmail(email);

    if (!student) {
      return left(new WrongCredentialsError());
    }

    const isPasswordValid = await this.hashComparer.compare(
      password,
      student.password,
    );

    if (!isPasswordValid) {
      return left(new WrongCredentialsError());
    }

    const accessToken = await this.encrypter.encrypt({
      sub: student.id.toString(),
    });

    return right({
      accessToken,
    });
  }
}
