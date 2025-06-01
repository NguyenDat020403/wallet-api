import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [JwtModule.register({}), SupabaseModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
