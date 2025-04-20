import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { UserService } from './user.service';
import { omit } from 'lodash';
import { generateResponse } from 'src/utils/response';
import { AddNetworksDto, RemoveNetworksDto } from './user.dto';
import { User } from 'src/decorators/user.decorator';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getMe')
  async getMe(@Body() dto: { id: string }) {
    const response = await this.userService.findById(dto.id, true);
    return generateResponse('success', response);
  }
  @Get('getUserByAddress')
  async getUserByAddress(@Body() dto: { address: string }) {
    const response = await this.userService.findUserByAddress(dto.address);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const omitResponse = omit(response, ['password', 'id']);
    return generateResponse('success', omitResponse);
  }

  //Network
  @Patch('/networks/add')
  async addNetworks(@User('sub') id: string, @Body() body: AddNetworksDto) {
    return this.userService.addNetwork(id, body.networkIds);
  }
  @Patch('/networks/remove')
  removeNetworks(@User('sub') id: string, @Body() body: RemoveNetworksDto) {
    return this.userService.removeNetwork(id, body.networkIds);
  }
}
