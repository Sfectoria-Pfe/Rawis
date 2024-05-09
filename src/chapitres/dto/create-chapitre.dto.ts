import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateChapitreDto {
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    title : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    description : string 
    @ApiProperty ()
    @IsString()
    @IsNotEmpty()
    link : string 
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    coursId : string 
}
