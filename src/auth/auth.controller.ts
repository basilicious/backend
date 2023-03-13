import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLocalGuard } from './passport/user-local.guard';
import { UserAuthGuard } from './passport/user-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async createUser(@Body() _body: any) {
    const { email, password } = _body;
    const u = await this.authService.createUser(
      email,
      password,
    );
    if (u === 1) {
      throw new BadRequestException('Email already exists');
    }
    return 'User sucessfully created';
  }

  @UseGuards(UserLocalGuard)
  @Post('login')
  async loginUser(@Req() req: any) {
    return this.authService.loginUser(req.user);
  }

  @UseGuards(UserAuthGuard)
  @Get('getUserProfile')
  async userProfile(@Req() req: any) {
    return req.user;
  }

}
