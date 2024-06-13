//  authentication.controller.ts
import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { RefreshTokenDto } from './dto/refreshToken.dto/refreshToken.dto';
import { ChangePasswordDto } from './dto/changePassword.dto/changePassword.dto';

@Auth(AuthType.None) 
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto, @Res({ passthrough: true }) response: Response) {
    return this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK) 
  @Post('sign-in')
  signIn(
    @Res({ passthrough: true }) response: Response,
    @Body() signInDto: SignInDto,
) {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('change-password')
  changePassword(
    @Res({ passthrough: true }) response: Response,
    @Body() changePasswordDto: ChangePasswordDto,
) {
    return this.authService.changePassword(changePasswordDto);
  }

  @HttpCode(HttpStatus.OK) // changed since the default is 201
  @Post('refresh-tokens')
    refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto);
}

}