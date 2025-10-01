import { FetchRecentQuestionsService } from '@/domain/forum/services/fetch-recent-questions.service';
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe';
import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { z } from 'zod';
import { QuestionPresenter } from '../presenters/question-presenter';

const pageQueryParamSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1));

const queryValidationPipe = new ZodValidationPipe(pageQueryParamSchema);

type PageQueryParamSchema = z.infer<typeof pageQueryParamSchema>;

@Controller('/questions')
export class FetchResentQuestionsController {
  constructor(private fetchRecentQuestions: FetchRecentQuestionsService) {}

  @Get()
  async handle(@Query('page', queryValidationPipe) page: PageQueryParamSchema) {
    const result = await this.fetchRecentQuestions.execute({ page });

    if (result.isLeft()) {
      throw new BadRequestException();
    }
    const questions = result.value.questions;

    // eslint-disable-next-line @typescript-eslint/unbound-method
    return { questions: questions.map(QuestionPresenter.toHTTP) };
  }
}
