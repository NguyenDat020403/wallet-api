import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { swapTokenToToken } from 'src/utils/swap';

@UseGuards(JwtGuard)
@Injectable()
export class SwapService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async swapTokens(params: {
    chain_id: string;
    privateKey: string;
    tokenIn: string;
    tokenOut: string;
    amountInDecimal: string; // vd: '0.1'
    slippagePercent?: number;
    recipientAddress: string;
  }) {
    const {
      chain_id,
      privateKey,
      tokenIn,
      tokenOut,
      amountInDecimal,
      slippagePercent = 1,
      recipientAddress,
    } = params;

    const network = await this.prisma.networks.findFirst({
      where: { chain_id: chain_id },
    });
    if (!network) {
      return null;
    }
    const swapResult = await swapTokenToToken(
      network.rpc_url,
      privateKey,
      chain_id,
      tokenIn,
      tokenOut,
      amountInDecimal,
      slippagePercent,
      recipientAddress,
    );
    if (!swapResult) {
      return null;
    }
    return swapResult;
  }
}
