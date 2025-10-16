import { QuestionAttachment } from '@/domain/forum/entities/question-attachment';
import { QuestionAttachmentsRepository } from '@/domain/forum/repositories/question-attachments.repository';
import { Injectable } from '@nestjs/common';
import { PrismaQuestionAttachmentMapper } from '../mappers/prisma-question-attachment-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaQuestionAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  constructor(private prisma: PrismaService) {}

  async findManyByQuestionId(
    questionId: string,
  ): Promise<QuestionAttachment[]> {
    const questionAttachments = await this.prisma.attachment.findMany({
      where: {
        questionId,
      },
    });

    return questionAttachments.map((item) =>
      PrismaQuestionAttachmentMapper.toDomain(item),
    );
  }

  async deleteManyByQuestionId(questionId: string): Promise<void> {
    await this.prisma.attachment.deleteMany({
      where: {
        questionId,
      },
    });
  }
}
