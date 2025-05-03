import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { UserService } from './user.service';
import { generateResponse } from 'src/utils/response';
import { User } from 'src/decorators/user.decorator';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getMe')
  async getMe(@User('sub') id: string) {
    const response = await this.userService.findById(id);
    return generateResponse('success', response);
  }

  @Get('getUserByEmail')
  async getUserByEmail(@Body() dto: { email: string }) {
    const response = await this.userService.findUserByEmail(dto.email);
    return generateResponse('success', response);
  }

  @Get('getUserByUsername')
  async getUserByUsername(@Body() dto: { username: string }) {
    const response = await this.userService.findUserByUsername(dto.username);
    return generateResponse('success', response);
  }

  //Network
  // @Patch('/networks/add')
  // async addNetworks(@User('sub') id: string, @Body() body: AddNetworksDto) {
  //   return this.userService.addNetwork(id, body.networkIds);
  // }
  // @Patch('/networks/remove')
  // removeNetworks(@User('sub') id: string, @Body() body: RemoveNetworksDto) {
  //   return this.userService.removeNetwork(id, body.networkIds);
  // }
  // @Patch('/tokens/import')
  // importToken(@User('sub') id: string, @Body() body: ImportTokenDto) {
  //   return this.userService.importToken(id, body);
  // }
  // @Get('/tokens/balance')
  // async getBalance(@User('sub') id: string, @Body() body: GetBalanceTokenDto) {
  //   const response = await this.userService.getBalance(id, body);
  //   return generateResponse('success', response);
  // }
}
