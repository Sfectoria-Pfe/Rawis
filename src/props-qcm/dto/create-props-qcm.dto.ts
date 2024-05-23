import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePropsQcmDto {
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    proposition : string
    @ApiProperty ()
    @IsNotEmpty()
    status : boolean
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    quizId : string

}
