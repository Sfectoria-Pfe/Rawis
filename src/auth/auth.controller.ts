import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';
import { forgetPassDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post()
  login(@Body() dto: CreateAuthDto) {
    return this.authService.login(dto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @ApiSecurity('apiKey')// yzid chrouleya fl swagger
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async findMe(@Request() req) {
    return await this.authService.getMyInfo(
      req.get('Authorization').replace('Bearer ', '')
    );// token with out bearer and space // type mtaa token howa bearer
  }

  @Post('/forgetPassword')
  forgotPassword(@Body() dto: forgetPassDto) {
    const { email } = dto;
    return this.authService.forgotPassword(email);
  }
  @Post('/forgetPassword/verificationCode')
  verificationCode(@Body() dto: forgetPassDto) {
    const {  code,email } = dto;
    return this.authService.verificationCode(code, email);
  }
  
//   @Post('/change-password')
//   changePassword(@Body() dto: ChangePassword) {
//     const { email, password, confirmPassword } = dto;
//     return this.authService.changePassword(email, password, confirmPassword);
//   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  updateMe(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.updateMe(updateUserDto,id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
