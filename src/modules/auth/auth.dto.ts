import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Match, Mnemonic } from 'src/common/validators';

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

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
  address?: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  biometricPublicKey?: string;
}

export class ImportWalletDto {
  @Mnemonic()
  mnemonic: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Match('password', {
    message: 'Passwords do not match',
  })
  confirmPassword: string;

  @IsString()
  @IsOptional()
  biometricPublicKey?: string;
}
