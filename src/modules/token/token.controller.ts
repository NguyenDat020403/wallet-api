import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { TokenService } from './token.service';
import {
  GetTokenMarketDataDTO,
  QueryTokenFromAddressDto,
  //   QueryTokenFromAddressDto,
  //   QueryTokensDto,
} from './token.dto';
import { generateResponse } from 'src/utils/response';

@UseGuards(JwtGuard)
@Controller('tokens')
export class TokenController {
  constructor(private tokenService: TokenService) {}
  @Post('create')
  async createToken(@Body() body: QueryTokenFromAddressDto) {
    return await this.tokenService.findOrCreateIfNotExist(body);
  }

  @Get('createTokenDefault')
  async createTokenDefault() {
    return await this.tokenService.createDefaultToken();
  }
  @Get('createDefaultTokenNetwork')
  async createDefaultTokenNetwork() {
    return await this.tokenService.createDefaultTokenNetwork();
  }
  @Post('resetDatabase')
  async resetDatabase() {
    return await this.tokenService.resetDatabase();
  }
  @Post('listWalletToken')
  async getListTokenByWalletId(@Body() dto: { wallet_id: string }) {
    const response = await this.tokenService.getListTokenByWalletId(
      dto.wallet_id,
    );
    if (!response) {
      return generateResponse('fail to load tokens', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }

  // API: GET /tokens/market?symbol=usdt
  @Post('market')
  async getCoinMarket(@Body() body: GetTokenMarketDataDTO) {
    const response = await this.tokenService.getTokenMarketData(body);
    if (response === null) {
      generateResponse('fail to load market data', '', '200', '1');
    }

    return generateResponse('success', response, '200', '0');
  }
}
