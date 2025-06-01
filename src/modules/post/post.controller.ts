import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { PostService } from './post.service';
import { CreatePostDto, LikePostDto, UpdatePostDto } from './post.dto';
import { User } from 'src/decorators/user.decorator';
import { generateResponse } from 'src/utils/response';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@UseGuards(JwtGuard)
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}
  @Post('create')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 10 }]))
  async createPost(
    @User('sub') userId: string,
    @Body() dto: CreatePostDto,
    @UploadedFiles() files: { images?: Express.Multer.File[] },
  ) {
    const post_created = await this.postService.createPost(userId, dto, files);
    if (!post_created) {
      return generateResponse('fail to create post', '', '200', '1');
    }
    return generateResponse('success', post_created, '200', '0');
  }
  @Patch('update')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 10 }]))
  async updatePost(
    @User('sub') userId: string,
    @Body() dto: UpdatePostDto,
    @UploadedFiles() files: { images?: Express.Multer.File[] },
  ) {
    const post_updated = await this.postService.updatePost(userId, dto, files);
    if (!post_updated) {
      return generateResponse(`can't find this post`, '', '200', '1');
    }
    return generateResponse('success', post_updated, '200', '0');
  }
  @Post('likePost')
  async likePost(@User('sub') userId: string, @Body() dto: LikePostDto) {
    const response_like = await this.postService.likePost(userId, dto);
    if (response_like.error) {
      return generateResponse(response_like.message, '', '200', '1');
    }
    return generateResponse(response_like.message, '', '200', '0');
  }
  @Get('getPosts')
  async getPosts(@Query('page') page?: string, @Query('limit') limit?: string) {
    const pageNumber = page ? parseInt(page, 10) : 1;
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    const response = await this.postService.getPosts(pageNumber, limitNumber);
    if (response.data.length === 0) {
      return generateResponse('no more data', response, '200', '0');
    }
    return generateResponse('success', response, '200', '0');
  }
}
