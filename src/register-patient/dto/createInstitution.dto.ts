import { number } from '@hapi/joi';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min } from 'class-validator';

export class CreateRegisterPatientDto {
    @IsString()
    @ApiProperty({
        type: String,
        description: "Intitution`s Name",
    })
    intitutions: string;
    

}
