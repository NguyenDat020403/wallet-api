import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreatePostDto, LikePostDto, UpdatePostDto } from './post.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { post_images } from 'generated/prisma';

@UseGuards(JwtGuard)
@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private supabaseService: SupabaseService,
  ) {}
  async createPost(
    userId: string,
    rq: CreatePostDto,
    files: { images?: Express.Multer.File[] },
  ) {
    const post = await this.prisma.posts.create({
      data: {
        user_id: userId,
        title: rq.title,
        content: rq.content,
      },
    });
    let resource;
    if (files.images && files.images.length > 0) {
      const fileInputs = files.images.map((file) => ({
        buffer: file.buffer,
        originalName: file.originalname,
      }));

      const post_images = await this.supabaseService.uploadPostImages(
        post.post_id,
        fileInputs,
      );
      const postImages = post_images.map((fileName) => ({
        post_id: post.post_id,
        imageUrl: this.supabaseService.getPostImageUrl(fileName),
      }));

      // 3. Lưu danh sách ảnh vào bảng post_images
      if (postImages) {
        await this.prisma.post_images.createMany({
          data: postImages,
        });
        resource = await this.prisma.post_images.findMany({
          where: {
            post_id: post.post_id,
          },
        });
      }
    }
    return {
      post: post,
      resource: resource,
    };
  }
  async updatePost(
    user_id: string,
    rq: UpdatePostDto,
    files: { images?: Express.Multer.File[] },
  ) {
    const post = await this.prisma.posts.findFirst({
      where: {
        post_id: rq.post_id,
        user_id: user_id,
        deleted_at: null,
      },
    });
    if (!post) {
      return null;
    }
    await this.prisma.posts.update({
      where: {
        post_id: rq.post_id,
      },
      data: {
        title: rq.title,
        content: rq.content,
        updated_at: new Date(),
      },
    });
    let updatedImages: post_images[];

    if (files?.images && files.images.length > 0) {
      // Xoá ảnh cũ trong DB (nếu cần thì xoá luôn trong Supabase, nhưng đoạn này chỉ xoá DB)
      await this.prisma.post_images.deleteMany({
        where: { post_id: rq.post_id },
      });

      const fileInputs = files.images.map((file) => ({
        buffer: file.buffer,
        originalName: file.originalname,
      }));

      const uploadedFileNames = await this.supabaseService.uploadPostImages(
        rq.post_id,
        fileInputs,
      );

      const imageRecords = uploadedFileNames.map((fileName) => ({
        post_id: rq.post_id,
        imageUrl: this.supabaseService.getPostImageUrl(fileName),
      }));

      // Lưu ảnh mới vào DB
      await this.prisma.post_images.createMany({
        data: imageRecords,
      });

      // Lấy lại danh sách ảnh mới để trả về
      updatedImages = await this.prisma.post_images.findMany({
        where: { post_id: rq.post_id },
      });
    } else {
      // Nếu không upload ảnh mới thì giữ nguyên danh sách ảnh hiện tại
      updatedImages = await this.prisma.post_images.findMany({
        where: { post_id: rq.post_id },
      });
    }
    // 3. Trả về post + danh sách ảnh mới
    const postUpdated = await this.prisma.posts.findUnique({
      where: { post_id: rq.post_id },
    });
    return {
      post: postUpdated,
      images: updatedImages,
    };
  }
  async likePost(user_id: string, rq: LikePostDto) {
    const post = await this.prisma.posts.findFirst({
      where: {
        post_id: rq.post_id,
        deleted_at: null,
      },
    });
    if (!post) {
      return { message: `can't find this post`, error: true };
    }
    const existingLike = await this.prisma.post_likes.findFirst({
      where: {
        post_id: rq.post_id,
        user_id: user_id,
      },
    });
    if (existingLike) {
      // Nếu đã like rồi => xóa like (unlike)
      await this.prisma.post_likes.delete({
        where: {
          post_like_id: existingLike.post_like_id,
        },
      });
      return { message: 'Like removed', error: false };
    } else {
      // Nếu chưa like => tạo mới like
      await this.prisma.post_likes.create({
        data: {
          post_id: rq.post_id,
          user_id: user_id,
        },
      });
      return { message: 'Like success', error: false };
    }
  }
  async getPosts(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [total, posts] = await this.prisma.$transaction([
      this.prisma.posts.count({
        where: { deleted_at: null },
      }),
      this.prisma.posts.findMany({
        where: { deleted_at: null },
        orderBy: { created_at: 'desc' },
        skip,
        take: limit,
        include: {
          user: {
            select: {
              user_id: true,
              username: true,
              avatar: true,
            },
          },
          images: true,
        },
      }),
    ]);

    return {
      total,
      page,
      limit,
      data: posts,
    };
  }
}
