import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateInscrireDto {
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    coursId : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    userId : string
}
