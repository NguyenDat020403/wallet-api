import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { SwapService } from './swap.service';
import { generateResponse } from 'src/utils/response';
import { SwapInfoDto, SwapTokenDto } from './swap.dto';

@UseGuards(JwtGuard)
@Controller('swaps')
export class SwapController {
  constructor(private swapService: SwapService) {}
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
}
