import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateQuizDto {
    @ApiProperty()
    question: string
    @ApiProperty()
    chapitreId: string
    @ApiProperty()
    propQcm:  qcmPropostion[]
    
   
}










interface qcmPropostion  {
    
proposition : string , 
status : boolean
}
