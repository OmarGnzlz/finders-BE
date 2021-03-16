import { HttpException, Injectable } from '@nestjs/common';
import { CreateRegisterPatientDto } from './dto/create-register-patient.dto';
import { UserService } from './../database/user/user.service'
import { TypeuserService } from '../database/typeuser/typeuser.service';
import { InstitutionsService } from '../database/institutions/institutions.service';


@Injectable()
export class RegisterPatientService {

  constructor(
    private patientRepository: UserService,
    private typeUserRepository: TypeuserService,
    private InstitutionsService: InstitutionsService,
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
    res.institutions_id = await this.InstitutionsService.getInstitution(res.institutions_id)

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
