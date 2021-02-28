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
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post('/register')
  @UseInterceptors(FileInterceptor('name'))
  async createUser(@Res() res: any, @Body() body: CreateRegisterDto) {
    const user = await this.registerService.createRegister(body);
    return res.status(HttpStatus.OK).json({ user });
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async loginUser(@Request() req: any) {
    console.log('1.-', req.user);
    // const user = await this.registerService.loginUser(req);
    // return res.status(HttpStatus.OK).json({ user });
    return req.user;
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
