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
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
    },
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaAnswersRepository,
  ],
  exports: [
    PrismaService,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswersRepository,
    QuestionsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    StudentsRepository,
  ],
})
export class DatabaseModule {}
