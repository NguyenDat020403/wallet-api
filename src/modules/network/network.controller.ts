import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { NetworkService } from './network.services';
import { User } from 'src/decorators/user.decorator';
import { CreateNetworkDto, CreateNetworkSwapDto } from './network.dto';

@UseGuards(JwtGuard)
@Controller('networks')
export class NetworkController {
  constructor(private networkService: NetworkService) {}
  @Post('createNetwork')
  createNetwork(@User('sub') id: string, @Body() body: CreateNetworkDto) {
    return this.networkService.createNetwork(id, body);
  }
  @Post(':id/createNetworkSwap')
  async createNetworkSwap(
    @Param('id') id: string,
    @Body() body: CreateNetworkSwapDto,
  ) {
    return this.networkService.createNetworkSwap(id, body);
  }
}
