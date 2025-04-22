import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategy';
import { NetworkController } from './network.controller';
import { NetworkService } from './network.services';

@Module({
  imports: [JwtModule.register({})],
  controllers: [NetworkController],
  providers: [NetworkService, JwtStrategy],
})
export class NetworkModule {}
