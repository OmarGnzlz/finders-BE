import { 
  Body, 
  Controller, 
  Get, 
  HttpStatus, 
  Param, 
  Post, 
  Res, 
  UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateRegisterDto } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('user')
export class RegisterController {
  constructor(
    private registerService: RegisterService
  ) {}

  @Post('/register')
  @UseInterceptors(FileInterceptor('name'))
  async createUser(@Res() res, @Body() body: CreateRegisterDto){
    const user = await this.registerService.createRegister(body)
    console.log(user)
    return res.status(HttpStatus.OK).json({ user })
  }

  @Get('/')
  async getUsers(@Res() res) {
    const users = await this.registerService.getUsers();
    return res.status(HttpStatus.OK).json({ users })
  }

  @Get('/:userID')
  async getUser(@Res() res, @Param('userID') userID) {
    const user = await this.registerService.getUser(userID);
    return res.status(HttpStatus.OK).json({
      user
    })
  }
}
