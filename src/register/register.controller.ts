import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  Request,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateRegisterDto } from './dto/createRegister.dto';
import { RegisterService } from './register.service';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('user')
export class RegisterController {
  constructor(
    private registerService: RegisterService,
    private authService: AuthService,
  ) {}

  @Post('/social-media')
  @UseInterceptors(FileInterceptor('name'))
  async createUserMedia(@Body() body: any) {
    const {  apiKeyToken, ...bodyUser } = body;
    const user = await this.registerService.createRegister(bodyUser, true);
    const payload = await this.authService.payloadUser(user);
    return payload;
  }

  @Post('/register')
  @UseInterceptors(FileInterceptor('name'))
  async createUser(@Res() res: any, @Body() body: CreateRegisterDto) {
    const user = await this.registerService.createRegister(body, false);
    return res.status(HttpStatus.OK).json({ user });
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async loginUser(@Request() req: any) {
    const payload = await this.authService.payloadUser(req.user);
    return payload;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getUsers(@Res() res: any) {
    const users = await this.registerService.getUsers();
    return res.status(HttpStatus.OK).json({ users });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:userID')
  async getUser(@Res() res: any, @Param('userID') userID: any) {
    const user = await this.registerService.getUser(userID);
    return res.status(HttpStatus.OK).json({
      user,
    });
  }
}
