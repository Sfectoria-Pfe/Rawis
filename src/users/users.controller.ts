import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags("users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // @UseGuards(JwtAuthGuard)
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Post('enseignant')
  //@UseGuards(JwtAuthGuard)
  createEns(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createEns(createUserDto);
  }

  @Post('etudiant')
  //@UseGuards(JwtAuthGuard)
  createEtd(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createEtd(createUserDto);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }
  @Get('enseignant')
  @UseGuards(JwtAuthGuard)
  findAllEns() {
    return this.usersService.findAllEns();
  }
  @Get('etudiant')
  @UseGuards(JwtAuthGuard)
  findAllEtd() {
    return this.usersService.findAllEtd();
  }
  @Get('user/:id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('etudiant/:id')
  @UseGuards(JwtAuthGuard)
  findOneEtd(@Param('id') id: string) {
    return this.usersService.findOneEtd(id);
  }

  @Get('enseignant/:id')
  @UseGuards(JwtAuthGuard)
  findOneEns(@Param('id') id: string) {
    return this.usersService.findOneEns(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
