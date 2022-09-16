import { Module } from '@nestjs/common';
import { ArticleService } from '@services/article.service';
import { ArticleController } from '@controllers/article.controller';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [],
})
export class ArticleModule {}
