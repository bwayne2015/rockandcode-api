import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PostsModule, MongooseModule.forRoot('mongodb://localhost/data')],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
