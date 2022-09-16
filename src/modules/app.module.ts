import { Module } from '@nestjs/common';
import { ArticleModule } from './article.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
