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
}
