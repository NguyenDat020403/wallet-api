import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { WalletService } from './wallet.service';
import { User } from 'src/decorators/user.decorator';
import { generateResponse } from 'src/utils/response';
import {
  GetWalletRequest,
  ImportWalletRequest,
  WalletNetworksRequest,
} from './wallet.dto';

@UseGuards(JwtGuard)
@Controller('wallets')
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Post('create')
  async createWallet(@User('sub') userId: string) {
    const response = await this.walletService.createWallet(userId);
    return generateResponse('success', response);
  }

  @Post('getWallet')
  async getWallet(@User('sub') userId: string, @Body() dto: GetWalletRequest) {
    const response = await this.walletService.getWallet(userId, dto);
    return generateResponse('success', response);
  }

  @Post('importWallet')
  async importWallet(
    @User('sub') userId: string,
    @Body() dto: ImportWalletRequest,
  ) {
    const response = await this.walletService.importWallet(userId, dto);
    return generateResponse('success', response, '200');
  }

  @Get('getUserWallets')
  async getUserWallets(@User('sub') userId: string) {
    const response = await this.walletService.getUserWallets(userId);
    return generateResponse('success', response);
  }

  @Get('getUserWalletNetwork')
  async getUserWalletNetwork(@Body() dto: WalletNetworksRequest) {
    const response = await this.walletService.getUserWalletNetwork(
      dto.wallet_id,
    );
    return generateResponse('success', response);
  }
}
