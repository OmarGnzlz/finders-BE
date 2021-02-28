import { number } from '@hapi/joi';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min } from 'class-validator';

export class CreateRegisterDto {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Name of the user',
  })
  name: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Email for the user to register',
  })
  email: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Picture for the user',
  })
  pictures: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Password to login in the application',
  })
  password: string;

  @IsInt()
  @ApiProperty({
    type: number,
    description: 'Type of user',
  })
  type_user_id?: number;
}
