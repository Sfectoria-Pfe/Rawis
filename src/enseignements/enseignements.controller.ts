import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnseignementsService } from './enseignements.service';
import { CreateEnseignementDto } from './dto/create-enseignement.dto';
import { UpdateEnseignementDto } from './dto/update-enseignement.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("enseignants")

@Controller('enseignements')
export class EnseignementsController {
  constructor(private readonly enseignementsService: EnseignementsService) {}

  @Post()
  create(@Body() createEnseignementDto: CreateEnseignementDto) {
    return this.enseignementsService.create(createEnseignementDto);
  }

  @Get()
  findAll() {
    return this.enseignementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enseignementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnseignementDto: UpdateEnseignementDto) {
    return this.enseignementsService.update(+id, updateEnseignementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enseignementsService.remove(+id);
  }
}
