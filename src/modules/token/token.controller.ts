import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { TokenService } from './token.service';
import { CreateTokenDto, QueryTokensDto } from './token.dto';

@UseGuards(JwtGuard)
@Controller('tokens')
export class TokenController {
  constructor(private tokenService: TokenService) {}
  @Post('createToken')
  async createToken(@Body() body: CreateTokenDto) {
    return this.tokenService.createToken(body);
  }
  @Get('getTokens')
  async getTokens(@Query() query: QueryTokensDto) {
    return this.tokenService.getTokens(query);
  }
}
