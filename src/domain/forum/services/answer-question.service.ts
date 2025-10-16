import { Either, right } from '@/core/entities/either';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Injectable } from '@nestjs/common';
import { Answer } from '../entities/answer';
import { AnswerAttachment } from '../entities/answer-attachment';
import { AnswerAttachmentList } from '../entities/answer-attachment-list';
import { AnswersRepository } from '../repositories/answers.repository';

interface AnswerQuestionServiceRequest {
  authorId: string;
  questionId: string;
  attachmentsIds: string[];
  content: string;
}

type AnswerQuestionServiceResponse = Either<null, { answer: Answer }>;

@Injectable()
export class AnswerQuestionService {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    authorId,
    questionId,
    content,
    attachmentsIds,
  }: AnswerQuestionServiceRequest): Promise<AnswerQuestionServiceResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(authorId),
      questionId: new UniqueEntityID(questionId),
    });

    const answerAttachments = attachmentsIds.map((attachmentId) => {
      return AnswerAttachment.create({
        attachmentId: new UniqueEntityID(attachmentId),
        answerId: answer.id,
      });
    });

    answer.attachments = new AnswerAttachmentList(answerAttachments);

    await this.answersRepository.create(answer);

    return right({ answer });
  }
}
