import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReponsesQService } from './reponses-q.service';
import { CreateReponsesQDto } from './dto/create-reponses-q.dto';
import { UpdateReponsesQDto } from './dto/update-reponses-q.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("reponses qcm")

@Controller('reponses-q')
export class ReponsesQController {
  constructor(private readonly reponsesQService: ReponsesQService) {}

  @Post()
  create(@Body() createReponsesQDto: CreateReponsesQDto) {
    return this.reponsesQService.create(createReponsesQDto);
  }

  @Get()
  findAll() {
    return this.reponsesQService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reponsesQService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReponsesQDto: UpdateReponsesQDto) {
    return this.reponsesQService.update(+id, updateReponsesQDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reponsesQService.remove(+id);
  }
}
