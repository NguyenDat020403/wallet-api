import { IsString } from 'class-validator';

export class SwapTokenDto {
  @IsString()
  chain_id: string;
  privateKey: string;
  tokenIn: string;
  tokenOut: string;
  amountInDecimal: string;
  slippagePercent?: number;
  recipientAddress: string;
}
