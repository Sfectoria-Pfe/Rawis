import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"
import { Role } from '.prisma/client';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nom: string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    prenom: string
    @ApiProperty()
    @IsEmail()
    email: string
    @ApiProperty()

    password: string
    @ApiProperty()

    phone: string
    @ApiProperty()

    role: Role
}
export class forgetPassDto {
    @ApiProperty()
    @IsEmail()
    email: string
    @ApiProperty()

    code: string
   
   

}


