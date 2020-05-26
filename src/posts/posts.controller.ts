import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { PostInterface } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): PostInterface[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): PostInterface {
    return this.postsService.fondOne(id);
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): string {
    return `Name: ${createPostDto.title} Description: ${createPostDto.desc} Author: ${createPostDto.author}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updatePostDto: CreatePostDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updatePostDto.title}`;
  }
}
