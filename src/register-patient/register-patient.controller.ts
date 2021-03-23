import { 
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  Request,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateRegisterPatientDto } from './dto/create-register-patient.dto';
import { UpdateRegisterPatientDto } from './dto/update-register-patient.dto'
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

  @Put('/update-patient')
  @UseInterceptors(FileInterceptor('name'))
  async update(@Res() res: any, @Body() body: UpdateRegisterPatientDto){
    
  }

  @Get('/')
  async getAllPatient(@Res() res: any) {
    const data = await this.registerPatientService.getPatients();
    return res.status(HttpStatus.OK).json({ data })
  }

  @Get('/:userID')
  async getPatient(@Res() res:any ,@Param('userID') userID: any) {
    const user = await this.registerPatientService.getPatient(userID);
    return res.status(HttpStatus.OK).json({user})
  }
  
}
