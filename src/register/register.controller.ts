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
import { LocalAuthGuard } from '../auth/auth-local.guard';
import { CreateRegisterDto } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('user')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post('/register')
  @UseInterceptors(FileInterceptor('name'))
  async createUser(@Res() res: any, @Body() body: CreateRegisterDto) {
    const user = await this.registerService.createRegister(body);
    return res.status(HttpStatus.OK).json({ user });
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async loginUser(@Request() req: any, @Res() res: any) {
    console.log(req.user);
    const user = await this.registerService.loginUser(req);
    return res.status(HttpStatus.OK).json({ user });
  }

  @Get('/')
  async getUsers(@Res() res: any) {
    const users = await this.registerService.getUsers();
    return res.status(HttpStatus.OK).json({ users });
  }

  @Get('/:userID')
  async getUser(@Res() res: any, @Param('userID') userID: any) {
    const user = await this.registerService.getUser(userID);
    return res.status(HttpStatus.OK).json({
      user,
    });
  }
}
