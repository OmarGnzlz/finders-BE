import { HttpException, Injectable } from '@nestjs/common';
import { CreateRegisterPatientDto } from './dto/create-register-patient.dto';
import { UserService } from './../database/user/user.service'
import { TypeuserService } from '../database/typeuser/typeuser.service';
import { InstitutionsService } from '../database/institutions/institutions.service';
import { UserguardService } from '../database/userguard/userguard.service'
import { HealthServiceDB } from '../database/health/health.service'


@Injectable()
export class RegisterPatientService {

  constructor(
    private patientRepository: UserService,
    private typeUserRepository: TypeuserService,
    private InstitutionsService: InstitutionsService,
    private UserGuardRepository: UserguardService,
    private HealthRepository: HealthServiceDB
  ) {}
  

  getPatienIdDocument = async (id_document: string) => {
    return await this.patientRepository.getUserByDocument(id_document)
  }

  lowerCaseWord = (word: string) => {
    return word.toLowerCase();
  };

  createPatient = async (createRegisterPatientDto: CreateRegisterPatientDto ,media: boolean) => {
    createRegisterPatientDto.id_document = this.lowerCaseWord(createRegisterPatientDto.id_document)
    
    const idDocumentExist = await this.getPatienIdDocument(createRegisterPatientDto.id_document)

    if(idDocumentExist) throw new HttpException('patient already register', 400);

    const healthInfo = {
      allergies: createRegisterPatientDto.allergies,
      blood_type: createRegisterPatientDto.blood_type,
      medication: createRegisterPatientDto.medication,
      diseases: createRegisterPatientDto.diseases,
    }

    const registerHealth: any = await this.HealthRepository.createhHealthInfo(healthInfo)


    const patientInfo = {
      name: createRegisterPatientDto.name,
      address: createRegisterPatientDto.address,
      id_document: createRegisterPatientDto.id_document,
      pictures: createRegisterPatientDto.pictures,
      contact_emergencies: createRegisterPatientDto.contact_emergencies,
      institution: createRegisterPatientDto.institution,
      type_user_id: createRegisterPatientDto.type_user_id,
      userguard_id: createRegisterPatientDto.userguard_id,
      health_id : registerHealth.id
    }



    const registerPatient: any = await this.patientRepository.createUser(patientInfo);

    const { ...res } = registerPatient
    res.type_user_id = await this.typeUserRepository.getTypeById(res.type_user_id);
    res.userguard_id = await this.UserGuardRepository.getById(res.userguard_id)
    res.health_id = await this.HealthRepository.geInfo(res.health_id)
    

    return res; 

  }

  getPatients = async() => {
    const patients = await this.patientRepository.getAll()

    for (const i in patients){
      patients[i].type_user_id = await this.typeUserRepository.getTypeById(patients[i].type_user_id)
      patients[i].userguard_id = await this.UserGuardRepository.getById(patients[i].userguard_id)
      patients[i].health_id = await this.HealthRepository.geInfo(patients[i].health_id)
    }

    return patients
  }

  getPatient =  async (patientID: string) => {
    const patient: any = await this.patientRepository.getUserById(parseInt(patientID))
    if(patient === undefined) throw new HttpException('Patient does not exits', 400)

   
    const { ...res } = patient
    res.type_user_id = await this.typeUserRepository.getTypeById(res.type_user_id);
    res.userguard_id = await this.UserGuardRepository.getById(res.userguard_id)
    res.health_id = await this.HealthRepository.geInfo(res.health_id)
    
    return res

  }

 

  remove(id: number) {
    return `This action removes a #${id} registerPatient`;
  }
}
