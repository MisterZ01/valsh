import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
// import { localAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @UseGuards(localAuthGuard)
  @Post('login')
  async login(@Body() body) {
    const user = this.authService.VerificationUtilisateur(body.email, body.mdp)
    return user;
  }

  // @UseGuards(localAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}