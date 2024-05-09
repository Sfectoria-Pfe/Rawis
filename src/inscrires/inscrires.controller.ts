import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InscriresService } from './inscrires.service';
import { CreateInscrireDto } from './dto/create-inscrire.dto';
import { UpdateInscrireDto } from './dto/update-inscrire.dto';

@Controller('inscrires')
export class InscriresController {
  constructor(private readonly inscriresService: InscriresService) {}

  @Post()
  create(@Body() createInscrireDto: CreateInscrireDto) {
    return this.inscriresService.create(createInscrireDto);
  }

  @Get()
  findAll() {
    return this.inscriresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inscriresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInscrireDto: UpdateInscrireDto) {
    return this.inscriresService.update(id, updateInscrireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inscriresService.remove(id);
  }
}
