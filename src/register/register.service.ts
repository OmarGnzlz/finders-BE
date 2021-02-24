import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/createRegister.dto';
import { UserGuard } from '../database/userguard/entities/userguard.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {

    constructor(@InjectRepository(UserGuard) private registerRepository: Repository<UserGuard>) {}

    async createRegister(createRegisterDto: CreateRegisterDto): Promise<UserGuard> {
        const register = this.registerRepository.create(createRegisterDto);
        await this.registerRepository.save(createRegisterDto);
        return register
        
    }

    async getUsers(): Promise<UserGuard[]> {
        const users = await this.registerRepository.find();
        return users;
    }

    async getUser(userID: string): Promise<UserGuard> {
        const user = await this.registerRepository.findOne(userID);
        return user;
    }
}
