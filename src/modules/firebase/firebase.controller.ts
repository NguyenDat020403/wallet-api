import { Body, Controller, Post } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { GoogleDriveService } from 'src/utils/googleDriveService';

@Controller('firebase')
export class FirebaseController {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly googleDriveService: GoogleDriveService,
  ) {}

  @Post('backup')
  async backup(
    @Body() body: { userId: string; mnemonic: string; secret: string },
  ) {
    const url = await this.googleDriveService.uploadEncryptedMnemonic(
      body.userId,
      body.mnemonic,
      body.secret,
    );
    return { message: 'Backup successful', url };
  }
}
