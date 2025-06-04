import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { Express } from 'express';
import { SupabaseService } from './supabase.service';
import { generateResponse } from 'src/utils/response';
import { JwtGuard } from 'src/guards';
import { User } from 'src/decorators/user.decorator';
@UseGuards(JwtGuard)
@Controller('upload')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  async uploadAvatar(
    @User('sub') userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const user_updated = await this.supabaseService.uploadAvatar(
      userId,
      file ? file.buffer : null,
      file ? file.originalname : '',
    );
    if (!user_updated) {
      return generateResponse('fail to upload avatar', '', '200', '1');
    }
    return generateResponse('success', user_updated, '200', '0');
  }

  @Post(':postId/images')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 10 }]))
  async uploadPostImages(
    @Param('postId', ParseUUIDPipe) postId: string,
    @UploadedFiles()
    files: { images?: Express.Multer.File[] },
  ): Promise<{ uploaded: string[] }> {
    if (!files.images || files.images.length === 0) {
      throw new Error('No images uploaded');
    }

    // Chuyển đổi sang format mà service cần
    const fileInputs = files.images.map((file) => ({
      buffer: file.buffer,
      originalName: file.originalname,
    }));

    const uploaded = await this.supabaseService.uploadPostImages(
      postId,
      fileInputs,
    );

    return { uploaded };
  }
}
