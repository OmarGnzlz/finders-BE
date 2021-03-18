import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { InformationService } from './information.service';
import { CreateInformationDto } from './dto/create-information.dto';


@Controller('information')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Post()
  create(@Body() createInformationDto: CreateInformationDto) {
    return this.informationService.create(createInformationDto);
  }

  @Get()
  findAll() {
    return this.informationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informationService.findOne(+id);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informationService.remove(+id);
  }
}