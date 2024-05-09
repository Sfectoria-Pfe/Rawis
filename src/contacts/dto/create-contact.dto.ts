import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateContactDto {
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    name : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    email : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    sujet : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    description : string 
}
