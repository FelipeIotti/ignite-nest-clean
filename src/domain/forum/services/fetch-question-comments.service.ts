import { Either, right } from '@/core/entities/either';
import { Injectable } from '@nestjs/common';
import { QuestionComment } from '../entities/question-comment';
import { QuestionCommentsRepository } from '../repositories/question-comments.repository';

interface FetchQuestionCommentsServiceRequest {
  questionId: string;
  page: number;
}

type FetchQuestionCommentsServiceResponse = Either<
  null,
  {
    questionComments: QuestionComment[];
  }
>;

@Injectable()
export class FetchQuestionCommentsService {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsServiceRequest): Promise<FetchQuestionCommentsServiceResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      });

    return right({
      questionComments,
    });
  }
}
