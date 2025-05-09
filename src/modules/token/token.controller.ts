import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { TokenService } from './token.service';
import {
  CreateTokenDto,
  //   QueryTokenFromAddressDto,
  //   QueryTokensDto,
} from './token.dto';
import { generateResponse } from 'src/utils/response';

@UseGuards(JwtGuard)
@Controller('tokens')
export class TokenController {
  constructor(private tokenService: TokenService) {}
  @Post('create')
  async createToken(@Body() body: CreateTokenDto) {
    const data = await this.tokenService.createToken(body);
    return generateResponse('success', data);
  }
  @Get('demoTokenDefaultCreate')
  async createTokenDefault(wallet_id: string) {
    return await this.tokenService.getTokens(wallet_id);
  }
  @Post('resetTokenDefault')
  async resetTokenDefault() {
    return await this.tokenService.resetTokenDefault();
  }
}
