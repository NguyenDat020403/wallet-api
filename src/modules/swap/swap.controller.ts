import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards';
import { SwapService } from './swap.service';
import { generateResponse } from 'src/utils/response';
import { SwapTokenDto } from './swap.dto';

@UseGuards(JwtGuard)
@Controller('swaps')
export class SwapController {
  constructor(private swapService: SwapService) {}
  @Post('swap')
  async swap(@Body() body: SwapTokenDto) {
    const receipt = await this.swapService.swapTokens({
      chain_id: body.chain_id, // 'bscTestnet' hoặc 'polygonMumbai'
      privateKey: body.privateKey,
      tokenIn: body.tokenIn,
      tokenOut: body.tokenOut,
      amountInDecimal: body.amountInDecimal,
      slippagePercent: body.slippagePercent,
      recipientAddress: body.recipientAddress,
    });
    if (!receipt) {
      return generateResponse('swap failed', '', '200', '1');
    }
    return generateResponse('success', { receipt: receipt }, '200', '0');
  }
}
