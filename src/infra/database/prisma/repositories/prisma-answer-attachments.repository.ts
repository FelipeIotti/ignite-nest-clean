import { AnswerAttachment } from '@/domain/forum/entities/answer-attachment';
import { AnswerAttachmentsRepository } from '@/domain/forum/repositories/answer-attachments.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAnswerAttachmentsRepository
  implements AnswerAttachmentsRepository
{
  findManyByAnswerId(answerId: string): Promise<AnswerAttachment[]> {
    throw new Error('Method not implemented.');
  }

  deleteManyByAnswerId(answerId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
