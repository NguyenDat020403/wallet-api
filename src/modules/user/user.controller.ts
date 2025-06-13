import {
  Body,
  Controller,
  Get,
  Patch,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { UserService } from './user.service';
import { generateResponse } from 'src/utils/response';
import { User } from 'src/decorators/user.decorator';
import { UpdateUserDto } from './user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { SupabaseService } from '../supabase/supabase.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private supabaseService: SupabaseService,
  ) {}

  @Get('getMe')
  async getMe(@User('sub') id: string) {
    const response = await this.userService.findById(id);
    return generateResponse('success', response);
  }

  @Get('getUserByEmail')
  async getUserByEmail(@Body() dto: { email: string }) {
    const response = await this.userService.findUserByEmail(dto.email);
    return generateResponse('success', response);
  }

  @Get('getUserByUsername')
  async getUserByUsername(@Body() dto: { username: string }) {
    const response = await this.userService.findUserByUsername(dto.username);
    return generateResponse('success', response);
  }
  @Patch('update')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @User('sub') userId: string,
    @Body() dto: UpdateUserDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      await this.supabaseService.uploadAvatar(
        userId,
        file ? file.buffer : null,
        file ? file.originalname : '',
      );
    }
    const response = await this.userService.update(userId, dto);
    if (!response) {
      return generateResponse('fail to update profile', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
  @Get()
  async getUser(@Query('userId') userId: string) {
    const response = await this.userService.findById(userId);
    if (!response) {
      return generateResponse('fail to load user', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
}
