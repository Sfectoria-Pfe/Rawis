import { ApiProperty } from "@nestjs/swagger";
import { Semestre } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCourDto {
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    title : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    description : string 
    fieldId : string
    semestre : Semestre

}
