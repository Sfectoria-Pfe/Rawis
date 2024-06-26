import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateEnseignementDto {
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    coursId : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    userId : string
}
