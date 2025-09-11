import { AuthenticateController } from '@/infra/http/controllers/authenticate.controller';
import { CreateAccountController } from '@/infra/http/controllers/create-account.controller';
import { CreateQuestionController } from '@/infra/http/controllers/create-question.controller';
import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { FetchResentQuestionsController } from './controllers/fetch-resents-questions.controller';

@Module({
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchResentQuestionsController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}
