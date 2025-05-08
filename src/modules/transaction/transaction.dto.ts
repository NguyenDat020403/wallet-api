import { IsNotEmpty, IsString } from 'class-validator';

export class FeeRequest {
  @IsString()
  @IsNotEmpty()
  rpc_url: string;
}
