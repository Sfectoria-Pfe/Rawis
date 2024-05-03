import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"
import { Role } from '.prisma/client';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nom     : string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    prenom :  string
    @ApiProperty()
    @IsEmail()
    email   : string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phone   : string
    @ApiProperty()
    @IsNotEmpty()
    role : Role 
}

