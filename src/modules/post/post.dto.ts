import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export interface CreatePostDto {
  title: string;
  content: string;
}
export interface UpdatePostDto extends CreatePostDto {
  post_id: string;
}
export class LikePostDto {
  @IsString()
  @IsNotEmpty()
  post_id: string;
}

export class LikeCommentDto {
  @IsString()
  @IsNotEmpty()
  comment_id: string;
}
export class CreateCommentDto {
  @IsUUID()
  @IsNotEmpty()
  post_id: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
