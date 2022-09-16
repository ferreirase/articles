import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

export interface ArticleResumed {
  author: string;
  title: string;
  description: string;
}

export interface ArticleOriginal {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

@Injectable()
export class ArticleService {
  private configService: ConfigService = new ConfigService();

  async getArticles(): Promise<Array<ArticleResumed>> {
    try {
      const response = await axios.get(
        `${this.configService.get<string>(
          'NEWS_API_URL',
        )}&apiKey=${this.configService.get<string>('NEWS_API_KEY')}`,
      );

      const articles = response.data.articles.map(
        (article: ArticleOriginal) => {
          return {
            author: article.author,
            title: article.title,
            description: article.description,
          };
        },
      );

      return articles;
    } catch (error) {
      console.error(error);
      throw new HttpException('Error getting articles', 400);
    }
  }
}
