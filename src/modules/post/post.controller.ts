import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { PostService } from './post.service';
import {
  CreateCommentDto,
  CreatePostDto,
  DeletePostDto,
  LikeCommentDto,
  LikePostDto,
  UpdatePostDto,
} from './post.dto';
import { User } from 'src/decorators/user.decorator';
import { generateResponse } from 'src/utils/response';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@UseGuards(JwtGuard)
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}
  @Get('')
  async getPost(
    @Query('userId') userId: string,
    @Query('postId') postId: string,
  ) {
    const response = await this.postService.getPostById(postId, userId);
    if (!response) {
      return generateResponse('Not found', response, '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
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
  @Patch('deletePost')
  async deletePost(@User('sub') userId: string, @Body() dto: DeletePostDto) {
    const response_like = await this.postService.deletePost(userId, dto);
    if (response_like.error) {
      return generateResponse(response_like.message, '', '200', '1');
    }
    return generateResponse(response_like.message, '', '200', '0');
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
  async getPosts(
    @User('sub') userId?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNumber = page ? parseInt(page, 10) : 1;
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    const response = await this.postService.getPosts(
      pageNumber,
      limitNumber,
      userId,
    );
    if (response.data.length === 0) {
      return generateResponse('no more data', response, '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
  @Get('getUserPosts')
  async getUserPosts(
    @Query('userId') userId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNumber = page ? parseInt(page, 10) : 1;
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    const response = await this.postService.getUserPosts(
      pageNumber,
      limitNumber,
      userId,
    );
    if (response.data.length === 0) {
      return generateResponse('no more data', response, '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
  @Post('comment')
  async commentPost(
    @User('sub') userId: string,
    @Body() dto: CreateCommentDto,
  ) {
    const response = await this.postService.createComment(userId, dto);
    if (!response) {
      return generateResponse('fail to comment', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }

  @Get(':postId/comments')
  async getComments(
    @Param('postId') postId: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @User('sub') userId?: string,
  ) {
    const response = await this.postService.getComments(
      postId,
      page,
      limit,
      userId,
    );
    if (!response) {
      return generateResponse('fail to load comment', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
  @Post('likeComment')
  async likeComment(@User('sub') userId: string, @Body() dto: LikeCommentDto) {
    const response_like = await this.postService.likeComment(userId, dto);
    if (response_like.error) {
      return generateResponse(response_like.message, '', '200', '1');
    }
    return generateResponse(response_like.message, '', '200', '0');
  }
  @Delete(':postId/:commentId/delete')
  async deleteComment(
    @User('sub') userId: string,
    @Param('postId') postId: string,
    @Param('commentId') commentId: string,
  ) {
    const response = await this.postService.deleteComments(
      userId,
      postId,
      commentId,
    );
    if (!response.data) {
      return generateResponse(response.message, '', '200', '1');
    }
    return generateResponse(response.message, response, '200', '0');
  }
}
