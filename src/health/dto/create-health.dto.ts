import { number } from '@hapi/joi';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min } from 'class-validator';

export class CreateHealthDto {
    @IsInt()
    @ApiProperty({
        type: number,
        description: "User's allergies",
    })
    allergies: number;
    
    @IsInt()
    @ApiProperty({
        type: number,
        description: "User's blood type",
    })
    blood_type: number;

    @IsInt()
    @ApiProperty({
        type: number,
        description: "User's medications",
    })
    medication: number;

    @IsInt()
    @ApiProperty({
        type: number,
        description: "User's diseases",
    })
    diseases: number;
    
    @IsInt()
    @ApiProperty({
        type: number,
        description: "User Angel Id",
    })
    user_id: number;

}