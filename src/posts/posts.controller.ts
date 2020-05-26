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

@Controller('posts')
export class PostsController {
  @Get()
  findAll(): string {
    return 'All the posts';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Post ${id}`;
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
