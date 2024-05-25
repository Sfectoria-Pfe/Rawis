import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizsService } from './quizs.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("quiz")

@Controller('quizs')
export class QuizsController {
  constructor(private readonly quizsService: QuizsService) { }

  @Post()
  create(@Body() createQuizDto: any) {
    return this.quizsService.create(createQuizDto?.questions);
  }

  @Get(":idChapitre")
  findAll( @Param('idChapitre') idChapitre: string) {
    return this.quizsService.findAll(idChapitre);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.quizsService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
  //   return this.quizsService.update(id, updateQuizDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizsService.remove(id);
  }
}
