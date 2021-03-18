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
import { HealthService } from './health.service';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post('/add-healthInformation')
  async create(@Res() res: any ,@Body() body: CreateHealthDto) {
    const health =  await this.healthService.createHealth(body);
    return res.status(HttpStatus.OK).json({ health })

  }

  @Get()
  findAll() {
    return this.healthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthService.findOne(+id);
  }


}
