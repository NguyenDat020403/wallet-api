import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { getSwapInfo, swapTokenToToken } from 'src/utils/swap';

@UseGuards(JwtGuard)
@Injectable()
export class SwapService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async swapTokens(params: {
    rpc_url: string;
    privateKey: string;
    tokenIn: string;
    amountInDecimal: string;
    isSwapAtoB?: boolean;
  }) {
    const { rpc_url, privateKey, tokenIn, amountInDecimal, isSwapAtoB } =
      params;
    const swapResult = await swapTokenToToken(
      rpc_url,
      privateKey,
      tokenIn,
      amountInDecimal,
      isSwapAtoB,
    );
    return swapResult;
  }
  async getSwapInfo(params: { rpc_url: string; contract_address: string }) {
    const data = await getSwapInfo(params.rpc_url, params.contract_address);
    const tokens = await this.prisma.tokens.findMany({
      where: {
        token_name: {
          in: ['TokenA', 'TokenVND'],
        },
      },
    });
    return { data, tokens };
  }
}
