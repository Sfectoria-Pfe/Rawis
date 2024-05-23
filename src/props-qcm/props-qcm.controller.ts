import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropsQcmService } from './props-qcm.service';
import { CreatePropsQcmDto } from './dto/create-props-qcm.dto';
import { UpdatePropsQcmDto } from './dto/update-props-qcm.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("proposition qcm")

@Controller('props-qcm')
export class PropsQcmController {
  constructor(private readonly propsQcmService: PropsQcmService) {}

  @Post()
  create(@Body() createPropsQcmDto: CreatePropsQcmDto) {
    return this.propsQcmService.create(createPropsQcmDto);
  }

  @Get()
  findAll() {
    return this.propsQcmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propsQcmService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropsQcmDto: UpdatePropsQcmDto) {
    return this.propsQcmService.update(id, updatePropsQcmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propsQcmService.remove(id);
  }
}
