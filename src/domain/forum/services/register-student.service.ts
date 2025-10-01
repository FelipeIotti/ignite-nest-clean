import { Either, left, right } from '@/core/entities/either';
import { Injectable } from '@nestjs/common';
import { HashGenerator } from '../cryptography/hash-generator';
import { Student } from '../entities/student';
import { StudentsRepository } from '../repositories/student.repository';
import { StudentAlreadyExistsError } from './errors/student-already-exists-error';

interface RegisterStudentServiceRequest {
  name: string;
  email: string;
  password: string;
}

type RegisterStudentServiceResponse = Either<
  StudentAlreadyExistsError,
  {
    student: Student;
  }
>;

@Injectable()
export class RegisterStudentService {
  constructor(
    private studentsRepository: StudentsRepository,
    private hashGenerator: HashGenerator,
  ) {}

  async execute({
    name,
    email,
    password,
  }: RegisterStudentServiceRequest): Promise<RegisterStudentServiceResponse> {
    const studentWithSameEmail =
      await this.studentsRepository.findByEmail(email);

    if (studentWithSameEmail) {
      return left(new StudentAlreadyExistsError(email));
    }

    const hashedPassword = await this.hashGenerator.hash(password);

    const student = Student.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.studentsRepository.create(student);

    return right({
      student,
    });
  }
}
