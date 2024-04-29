import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {
    @ApiProperty ()
    email : string 
    @ApiProperty ()
    description : string 
}
