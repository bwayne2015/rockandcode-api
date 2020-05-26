import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Post } from '@nestjs/common';

@Schema()
export class Cat extends Document {
  @Prop()
  title: String;

  @Prop()
  desc: String;

  @Prop()
  author: String;
}

export const PostSchema = SchemaFactory.createForClass(Post);
