import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { NetworkService } from './network.services';
import { User } from 'src/decorators/user.decorator';
import { CreateNetworkDto } from './network.dto';

@UseGuards(JwtGuard)
@Controller('networks')
export class NetworkController {
  constructor(private networkService: NetworkService) {}

  @Post('create')
  async createNetwork(
    @User('sub') userId: string,
    @Body() dto: CreateNetworkDto,
  ) {
    return this.networkService.createNetwork(userId, dto);
  }

  @Get('getNetwork')
  async getNetwork(@User('sub') userId: string) {
    return await this.networkService.getNetworkByUserId(userId);
  }
}
