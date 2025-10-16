import { AnswerQuestionService } from '@/domain/forum/services/answer-question.service';
import { AuthenticateStudentService } from '@/domain/forum/services/authenticate-student.service';
import { ChooseQuestionBestAnswerService } from '@/domain/forum/services/choose-question-best-answer.service';
import { CommentOnAnswerService } from '@/domain/forum/services/comment-on-answer.service';
import { CommentOnQuestionService } from '@/domain/forum/services/comment-on-question.service';
import { CreateQuestionService } from '@/domain/forum/services/create-question.service';
import { DeleteAnswerCommentService } from '@/domain/forum/services/delete-answer-comment.service';
import { DeleteAnswerService } from '@/domain/forum/services/delete-answer.service';
import { DeleteQuestionCommentService } from '@/domain/forum/services/delete-question-comment.service';
import { DeleteQuestionService } from '@/domain/forum/services/delete-question.service';
import { EditAnswerService } from '@/domain/forum/services/edit-answer.service';
import { EditQuestionService } from '@/domain/forum/services/edit-question.service';
import { FetchAnswerCommentsService } from '@/domain/forum/services/fetch-answer-comments.service';
import { FetchQuestionAnswersService } from '@/domain/forum/services/fetch-question-answers.service';
import { FetchQuestionCommentsService } from '@/domain/forum/services/fetch-question-comments.service';
import { FetchRecentQuestionsService } from '@/domain/forum/services/fetch-recent-questions.service';
import { GetQuestionBySlugService } from '@/domain/forum/services/get-question-by-slug.service';
import { RegisterStudentService } from '@/domain/forum/services/register-student.service';
import { AuthenticateController } from '@/infra/http/controllers/authenticate.controller';
import { CreateAccountController } from '@/infra/http/controllers/create-account.controller';
import { CreateQuestionController } from '@/infra/http/controllers/create-question.controller';
import { Module } from '@nestjs/common';
import { CryptographyModule } from '../cryptography/cryptography.module';
import { DatabaseModule } from '../database/database.module';
import { AnswerQuestionController } from './controllers/answer-question.controller';
import { ChooseQuestionBestAnswerController } from './controllers/choose-question-best-answer.controller';
import { CommentOnAnswerController } from './controllers/comment-on-answer.controller';
import { CommentOnQuestionController } from './controllers/comment-on-question.controller';
import { DeleteAnswerCommentController } from './controllers/delete-answer-comment.controller';
import { DeleteAnswerController } from './controllers/delete-answer.controller';
import { DeleteQuestionCommentController } from './controllers/delete-question-comment.controller';
import { DeleteQuestionController } from './controllers/delete-question.controller';
import { EditAnswerController } from './controllers/edit-answer.controller';
import { EditQuestionController } from './controllers/edit-question.controller';
import { FetchAnswerCommentsController } from './controllers/fetch-answer-comments.controller';
import { FetchQuestionAnswersController } from './controllers/fetch-question-answers.controller';
import { FetchQuestionCommentsController } from './controllers/fetch-question-comments.controller';
import { FetchResentQuestionsController } from './controllers/fetch-resents-questions.controller';
import { GetQuestionBySlugController } from './controllers/get-question-by-slug.controller';

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchResentQuestionsController,
    GetQuestionBySlugController,
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswersController,
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionCommentsController,
    FetchAnswerCommentsController,
  ],
  providers: [
    CreateQuestionService,
    FetchRecentQuestionsService,
    RegisterStudentService,
    AuthenticateStudentService,
    GetQuestionBySlugService,
    EditQuestionService,
    DeleteQuestionService,
    AnswerQuestionService,
    EditAnswerService,
    DeleteAnswerService,
    FetchQuestionAnswersService,
    ChooseQuestionBestAnswerService,
    CommentOnQuestionService,
    DeleteQuestionCommentService,
    CommentOnAnswerService,
    DeleteAnswerCommentService,
    FetchQuestionCommentsService,
    FetchAnswerCommentsService,
  ],
})
export class HttpModule {}
