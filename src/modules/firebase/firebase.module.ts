import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { FirebaseService } from './firebase.service';
import { FirebaseController } from './firebase.controller';
import { GoogleDriveService } from 'src/utils/googleDriveService';

@Module({
  imports: [JwtModule.register({})],
  controllers: [FirebaseController],
  providers: [FirebaseService, GoogleDriveService],
  exports: [FirebaseService],
})
export class FirebaseModule {}
