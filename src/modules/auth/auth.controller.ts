import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ImportWalletDto, SignInDto, SignUpDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signUp')
  signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('login')
  login(@Body() dto: SignInDto) {
    return this.authService.login(dto);
  }

  @Post('import')
  importWallet(@Body() dto: ImportWalletDto) {
    return this.authService.importWallet(dto);
  }
}
