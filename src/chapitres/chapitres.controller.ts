import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChapitresService } from './chapitres.service';
import { CreateChapitreDto } from './dto/create-chapitre.dto';
import { UpdateChapitreDto } from './dto/update-chapitre.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("chapitres")

@Controller('chapitres')
export class ChapitresController {
  constructor(private readonly chapitresService: ChapitresService) {}

  @Post()
  create(@Body() createChapitreDto: CreateChapitreDto) {
    return this.chapitresService.create(createChapitreDto);
  }

  @Get()
  findAll() {
    return this.chapitresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chapitresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChapitreDto: UpdateChapitreDto) {
    return this.chapitresService.update(id, updateChapitreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chapitresService.remove(id);
  }
}
