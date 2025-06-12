import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { WalletService } from './wallet.service';
import { User } from 'src/decorators/user.decorator';
import { generateResponse } from 'src/utils/response';
import {
  DeleteWalletDto,
  GetWalletRequest,
  ImportWalletDto,
  UpdateWalletDto,
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
  @Patch('update')
  async updateWallet(
    @User('sub') userId: string,
    @Body() dto: UpdateWalletDto,
  ) {
    const response = await this.walletService.updateWallet(
      userId,
      dto.wallet_id,
      dto.wallet_name,
    );
    if (!response) {
      return generateResponse('fail to update wallet', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }

  @Delete('delete')
  async deleteWallet(
    @User('sub') userId: string,
    @Body() dto: DeleteWalletDto,
  ) {
    const response = await this.walletService.deleteWallet(
      userId,
      dto.wallet_id,
    );
    if (!response) {
      return generateResponse('fail to update wallet', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
  @Post('import')
  async importWallet(
    @User('sub') userId: string,
    @Body() dto: ImportWalletDto,
  ) {
    const response = await this.walletService.importWallet(userId, dto);
    if (!response) {
      return generateResponse('fail to import wallet', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
  @Post('getWallet')
  async getWallet(@User('sub') userId: string, @Body() dto: GetWalletRequest) {
    const response = await this.walletService.getWallet(userId, dto);
    return generateResponse('success', response);
  }

  @Get('getUserWallets')
  async getUserWallets(@User('sub') userId: string) {
    const response = await this.walletService.getUserWallets(userId);
    return generateResponse('success', response);
  }

  @Get('getUserWalletNetwork')
  async getUserWalletNetwork(@Query('userId') userId: string) {
    const response = await this.walletService.getUserWalletNetwork(userId);
    return response;
  }
}
