import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReponsesExrService } from './reponses-exr.service';
import { CreateReponsesExrDto } from './dto/create-reponses-exr.dto';
import { UpdateReponsesExrDto } from './dto/update-reponses-exr.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("reponses exercices")

@Controller('reponses-exr')
export class ReponsesExrController {
  constructor(private readonly reponsesExrService: ReponsesExrService) {}

  @Post()
  create(@Body() createReponsesExrDto: CreateReponsesExrDto) {
    return this.reponsesExrService.create(createReponsesExrDto);
  }

  @Get()
  findAll() {
    return this.reponsesExrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reponsesExrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReponsesExrDto: UpdateReponsesExrDto) {
    return this.reponsesExrService.update(+id, updateReponsesExrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reponsesExrService.remove(+id);
  }
}
