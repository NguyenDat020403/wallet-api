import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Mnemonic } from 'src/common/validators';

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsOptional()
  biometricPublicKey?: string;
}
export class SignInDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  payload?: string;

  @IsString()
  @IsOptional()
  signature?: string;

  @IsUUID()
  @IsOptional()
  user_id?: string;
}

export class ImportWalletDto {
  @Mnemonic()
  mnemonic: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsOptional()
  biometricPublicKey?: string;
}
