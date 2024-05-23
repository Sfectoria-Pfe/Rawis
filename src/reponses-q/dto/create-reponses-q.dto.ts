import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateReponsesQDto {
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    userId : string
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    propQcmId : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    quizId : string
}
