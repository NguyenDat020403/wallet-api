import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards';
import { PrismaService } from 'src/prisma/prisma.service';
import { getGasPriceInfuraAPI } from 'src/utils/transaction';
import { FeeRequest } from './transaction.dto';
import { generateResponse } from 'src/utils/response';
@UseGuards(JwtGuard)
@Injectable()
export class TransactionService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async getEstimateGas(data: FeeRequest) {
    console.log(data);
    const feeData = await getGasPriceInfuraAPI('1');
    if (!feeData) {
      return generateResponse('fail', '', '200', 'fail to load feeData');
    }
    return generateResponse('success', feeData, '200');
  }
}
