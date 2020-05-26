import { Injectable } from '@nestjs/common';
import { PostInterface } from './interfaces/post.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Post') private postModel: Model<PostInterface>,
  ) {}

  findAll(): PostInterface[] {
    return this.posts;
  }

  fondOne(id: string): PostInterface {
    return this.posts.find(item => item.id === id);
  }
}
