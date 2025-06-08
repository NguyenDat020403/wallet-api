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
import { SwapService } from '../swap/swap.service';
import {
  GetTokenByNetworkIdDto,
  SwapInfoDto,
  SwapTokenDto,
} from '../swap/swap.dto';

@UseGuards(JwtGuard)
@Controller('tokens')
export class TokenController {
  constructor(
    private tokenService: TokenService,
    private swapService: SwapService,
  ) {}
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
  @Post('swap')
  async swap(@Body() body: SwapTokenDto) {
    const response = await this.swapService.swapTokens({
      rpc_url: body.rpc_url,
      privateKey: body.privateKey,
      tokenIn: body.tokenIn,
      amountInDecimal: body.amountInDecimal,
      isSwapAtoB: body.isSwapAtoB,
    });
    if (!response) {
      return generateResponse('swap failed', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
  // @Get('info') https
  @Post('info')
  async swapInfo(@Body() body: SwapInfoDto) {
    console.log(body);
    const response = await this.swapService.getSwapInfo({
      rpc_url: body.rpc_url,
      contract_address: body.contract_address,
    });
    if (!response) {
      return generateResponse('swap failed', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
  @Post('tokenByNetwork')
  async getTokenByNetwork(@Body() body: GetTokenByNetworkIdDto) {
    console.log(body);
    const response = await this.tokenService.getTokenByNetworkId(
      body.network_id,
      body.wallet_id,
    );
    if (!response) {
      return generateResponse('load failed', '', '200', '1');
    }
    return generateResponse('success', response, '200', '0');
  }
}
