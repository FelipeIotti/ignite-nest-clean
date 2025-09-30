import { CreateQuestionService } from '@/domain/forum/services/create-question.service';
import { FetchRecentQuestionsService } from '@/domain/forum/services/fetch-recent-questions.service';
import { AuthenticateController } from '@/infra/http/controllers/authenticate.controller';
import { CreateAccountController } from '@/infra/http/controllers/create-account.controller';
import { CreateQuestionController } from '@/infra/http/controllers/create-question.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { FetchResentQuestionsController } from './controllers/fetch-resents-questions.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchResentQuestionsController,
  ],
  providers: [CreateQuestionService, FetchRecentQuestionsService],
})
export class HttpModule {}
