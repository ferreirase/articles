import { Controller, Get } from '@nestjs/common';
import { ArticleService, ArticleResumed } from '@services/article.service';

type ArticleResponse = {
  articles: Array<ArticleResumed>;
};

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/')
  async getArticles(): Promise<ArticleResponse> {
    return {
      articles: await this.articleService.getArticles(),
    };
  }
}
