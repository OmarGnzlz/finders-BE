import { number, string } from '@hapi/joi';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min } from 'class-validator';

export class CreateHealthDto {
    @IsString()
    @ApiProperty({
        type: string,
        description: "User's allergies",
    })
    allergies: string;
    
    @IsString()
    @ApiProperty({
        type: string,
        description: "User's blood type",
    })
    blood_type: string;

    @IsString()
    @ApiProperty({
        type: string,
        description: "User's medications",
    })
    medication: string;

    @IsString()
    @ApiProperty({
        type: string,
        description: "User's diseases",
    })
    diseases: string;
    
    @IsInt()
    @ApiProperty({
        type: number,
        description: "User Angel Id",
    })
    user_id: number;

}