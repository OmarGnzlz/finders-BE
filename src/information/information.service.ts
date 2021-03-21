import { Injectable } from '@nestjs/common';
import { CreateInformationDto } from './dto/create-information.dto';


@Injectable()
export class InformationService {
  create(createInformationDto: CreateInformationDto) {
    return 'This action adds a new information';
  }

  findAll() {
    return `This action returns all information`;
  }

  findOne(id: number) {
    return `This action returns a #${id} information`;
  }



  remove(id: number) {
    return `This action removes a #${id} information`;
  }
}