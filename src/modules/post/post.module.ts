import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { SupabaseModule } from '../supabase/supabase.module';
import { CommentGateway } from '../comment/comment.gateway';
import { NotificationModule } from '../notification/notification.module';

@Module({
  imports: [JwtModule.register({}), SupabaseModule, NotificationModule],
  controllers: [PostController],
  providers: [PostService, CommentGateway],
  exports: [PostService],
})
export class PostModule {}
