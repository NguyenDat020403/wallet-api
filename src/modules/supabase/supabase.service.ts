import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { UserService } from '../user/user.service';
import { users } from 'generated/prisma';
import jdenticon from 'jdenticon';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/pixel-art';
@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(
    private config: ConfigService,
    private userService: UserService,
  ) {
    const supabeUrl: string | undefined = this.config.get('SUPABASE_URL');
    const supabePublicApi: string | undefined = this.config.get(
      'SUPABASE_PUBLIC_API',
    );
    if (supabeUrl && supabePublicApi) {
      this.supabase = createClient(supabeUrl, supabePublicApi);
    }
  }

  async uploadAvatar(
    userId: string,
    fileBuffer: Buffer | null,
    originalName: string,
  ): Promise<users | null> {
    if (fileBuffer === null) {
      const update_user_avatar = await this.userService.updateAvatar(
        userId,
        `https://api.dicebear.com/7.x/identicon/png?seed=${userId}`,
      );
      if (!update_user_avatar) {
        return null;
      }
      return update_user_avatar;
    }
    const ext = originalName.split('.').pop();
    const fileName = `user${userId}.${ext}`;
    const path = `${fileName}`;

    const response = await this.supabase.storage
      .from('avatars')
      .upload(path, fileBuffer, {
        contentType: `image/${ext}`,
        upsert: true,
      });

    if (response.error) {
      return null;
    }
    const avatar_url = this.getPublicAvatarUrl(fileName);
    const update_user_avatar = await this.userService.updateAvatar(
      userId,
      avatar_url,
    );
    if (!update_user_avatar) {
      return null;
    }
    return update_user_avatar;
  }
  async uploadPostImages(
    postId: string,
    files: { buffer: Buffer; originalName: string }[],
  ): Promise<string[]> {
    const uploadedFileNames: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const { buffer, originalName } = files[i];
      const ext = originalName.split('.').pop();
      const fileName = `post${postId}_${i + 1}.${ext}`;
      const path = `${fileName}`;

      const { error } = await this.supabase.storage
        .from('posts')
        .upload(path, buffer, {
          contentType: `image/${ext}`,
          upsert: true,
        });

      if (error) {
        throw new Error(`Upload failed for ${fileName}: ${error.message}`);
      }

      uploadedFileNames.push(fileName);
    }

    return uploadedFileNames;
  }

  getPublicAvatarUrl(fileName: string): string {
    const { data } = this.supabase.storage
      .from('avatars')
      .getPublicUrl(`${fileName}`);
    console.log(data.publicUrl);
    return data.publicUrl;
  }
  getPostImageUrl(fileName: string): string {
    const { data } = this.supabase.storage.from('posts').getPublicUrl(fileName);
    return data.publicUrl;
  }
}
