import { HttpException, Injectable } from '@nestjs/common';
import { CreateRegisterPatientDto } from './dto/create-register-patient.dto';
import { UserService } from './../database/user/user.service'
import { TypeuserService } from '../database/typeuser/typeuser.service';

@Injectable()
export class RegisterPatientService {

  constructor(
    private patientRepository: UserService,
    private typeUserRepository: TypeuserService,
  ) {}
  
  getPatienIdDocument = async (id_document: string) => {
    return await this.patientRepository.getUserByDocument(id_document)
  }

  lowerCaseWord = (word: string) => {
    return word.toLowerCase();
  };

  createPatient = async (createRegisterPatientDto: CreateRegisterPatientDto, media: boolean) => {
    createRegisterPatientDto.id_document = this.lowerCaseWord(createRegisterPatientDto.id_document)
    
    const idDocumentExist = await this.getPatienIdDocument(createRegisterPatientDto.id_document)

    if(idDocumentExist) throw new HttpException('patient already register', 400);

    const registerPatient: any = await this.patientRepository.createUser(createRegisterPatientDto);

    const {id_document, ...res } = registerPatient
    res.type_user_id = await this.typeUserRepository.getTypeById(res.type_user_id);

    return res; 

  }

  findAll() {
    return `This action returns all registerPatient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registerPatient`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} registerPatient`;
  }
}
