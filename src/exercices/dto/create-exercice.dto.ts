import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateExerciceDto {
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    question : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    coursId : string 
}
