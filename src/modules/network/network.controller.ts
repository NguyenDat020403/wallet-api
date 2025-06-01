import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
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
    return await this.networkService.createNetwork(userId, dto);
  }

  @Get('getNetwork')
  async getNetwork(@User('sub') userId: string) {
    return await this.networkService.getNetworkByUserId(userId);
  }
  @Get('getNetworkList/:wallet_id')
  async getNetworkList(@Param('wallet_id') wallet_id: string) {
    return await this.networkService.getNetworkList(wallet_id);
  }
}
