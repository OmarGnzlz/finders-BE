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
import { CreateRegisterPatientDto } from './dto/create-register-patient.dto';
import { RegisterPatientService } from './register-patient.service';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';




@Controller('patient')
export class RegisterPatientController {
  constructor(
    private registerPatientService: RegisterPatientService,
    private authService: AuthService,
    ){}

  @Post('/register-patient')
  @UseInterceptors(FileInterceptor('name'))
  async create(@Res() res: any ,@Body() body : CreateRegisterPatientDto) {
    const patient = await this.registerPatientService.createPatient(body, false)
    return res.status(HttpStatus.OK).json({ patient })
  }

  @Get()
  findAll() {
    return this.registerPatientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerPatientService.findOne(+id);
  }

 

  
}
