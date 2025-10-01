import { AuthenticateStudentService } from '@/domain/forum/services/authenticate-student.service';
import { CreateQuestionService } from '@/domain/forum/services/create-question.service';
import { FetchRecentQuestionsService } from '@/domain/forum/services/fetch-recent-questions.service';
import { RegisterStudentService } from '@/domain/forum/services/register-student.service';
import { AuthenticateController } from '@/infra/http/controllers/authenticate.controller';
import { CreateAccountController } from '@/infra/http/controllers/create-account.controller';
import { CreateQuestionController } from '@/infra/http/controllers/create-question.controller';
import { Module } from '@nestjs/common';
import { CryptographyModule } from '../cryptography/cryptography.module';
import { DatabaseModule } from '../database/database.module';
import { FetchResentQuestionsController } from './controllers/fetch-resents-questions.controller';

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchResentQuestionsController,
  ],
  providers: [
    CreateQuestionService,
    FetchRecentQuestionsService,
    RegisterStudentService,
    AuthenticateStudentService,
  ],
})
export class HttpModule {}
