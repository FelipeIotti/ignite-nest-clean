import { AnswerAttachmentsRepository } from '@/domain/forum/repositories/answer-attachments.repository';
import { AnswerCommentsRepository } from '@/domain/forum/repositories/answer-comments.repository';
import { AnswersRepository } from '@/domain/forum/repositories/answers.repository';
import { QuestionAttachmentsRepository } from '@/domain/forum/repositories/question-attachments.repository';
import { QuestionCommentsRepository } from '@/domain/forum/repositories/question-comments.repository';
import { QuestionsRepository } from '@/domain/forum/repositories/question.repository';
import { StudentsRepository } from '@/domain/forum/repositories/student.repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments.repository';
import { PrismaAnswerCommentsRepository } from './prisma/repositories/prisma-answer-comments.repository';
import { PrismaAnswersRepository } from './prisma/repositories/prisma-answers.repository';
import { PrismaQuestionAttachmentsRepository } from './prisma/repositories/prisma-question-attachments.repository';
import { PrismaQuestionCommentsRepository } from './prisma/repositories/prisma-question-comments.repository';
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-question.repository';
import { PrismaStudentsRepository } from './prisma/repositories/prisma-student.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
    },
    {
      provide: QuestionCommentsRepository,
      useClass: PrismaQuestionCommentsRepository,
    },
    {
      provide: QuestionAttachmentsRepository,
      useClass: PrismaQuestionAttachmentsRepository,
    },
    {
      provide: AnswersRepository,
      useClass: PrismaAnswersRepository,
    },
    {
      provide: AnswerCommentsRepository,
      useClass: PrismaAnswerCommentsRepository,
    },
    {
      provide: AnswerAttachmentsRepository,
      useClass: PrismaAnswerAttachmentsRepository,
    },
  ],
  exports: [
    PrismaService,
    QuestionsRepository,
    StudentsRepository,
    QuestionCommentsRepository,
    QuestionAttachmentsRepository,
    AnswersRepository,
    AnswerCommentsRepository,
    AnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}
