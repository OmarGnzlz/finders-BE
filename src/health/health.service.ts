import { HttpException, Injectable } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { UserService } from '../database/user/user.service'
import { HealthServiceDB } from '../database/health/health.service'
import { BloodtypeService } from '../database/bloodtype/bloodtype.service'
import { AllergiesService } from '../database/allergies/allergies.service'
import { DiseaseService } from '../database/disease/disease.service'
import { MedicationService } from '../database/medication/medication.service'



@Injectable()
export class HealthService {

  constructor(
    private patientRepository: UserService,
    private healthRepository: HealthServiceDB,
    private bloodtypeRepository: BloodtypeService,
    private allergiesRepository: AllergiesService,
    private diseaseRepository: DiseaseService,
    private mediactionRepository: MedicationService
  ){}
  
  getpatient = async(patient_id: any)=>{
    return await this.patientRepository.getUserById(patient_id)
  } 
  
  createHealth= async(createHealthDto: CreateHealthDto) => {
    const patientExists = this.getpatient(createHealthDto.user_id)

    if(!patientExists) throw new HttpException("User does not exist", 404)

    const register: any = await this.healthRepository.createhHealthInfo(createHealthDto)

    const { ...res } = register
    // find Id of the res on the tables
    res.user_id = await this.patientRepository.getUserById(res.user_id)
    res.blood_type = await this.bloodtypeRepository.getBloodType(res.blood_type)
    res.allergies = await this.allergiesRepository.getAllergies(res.allergies)
    res.diseases = await this.diseaseRepository.getDiseases(res.diseases)
    res.medication = await this.mediactionRepository.getMedication(res.medication)

    return res
  }

  findAll() {
    return `This action returns all health`;
  }

  findOne(id: number) {
    return `This action returns a #${id} health`;
  }

  update(id: number, updateHealthDto: UpdateHealthDto) {
    return `This action updates a #${id} health`;
  }

  remove(id: number) {
    return `This action removes a #${id} health`;
  }
}
