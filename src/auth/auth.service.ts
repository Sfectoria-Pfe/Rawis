import { Injectable, HttpException, HttpStatus, } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MailService } from 'src/mail/mail.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';



@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService, private readonly mailerService: MailService) {}

  async login(dto : CreateAuthDto) {
    const user = await this.prisma.user.findUnique({ where : { email: dto.email } });

    if (user) {
      const { password, ...rest } = user;
      if (await bcrypt.compare(dto.password, password)) {
        const token = this.jwt.sign(rest);
        return token;
      } else {
        throw new HttpException(
          'your password is wrong',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    else {
      return "user not found"
    }
  }

  async getMyInfo(token:string){
   const myInfo= await this.jwt.decode(token)
   return myInfo;
  }

  async forgotPassword(email: string) {
    let result = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    
    if (result) {
      let code = '';
      for (let i = 0; i < 8; i++) {
        code += Math.floor(Math.random() * 9);
      }

      await this.prisma.user.update({
        data: {
        confirmKey: code,
        },
        where: {
          email: result.email,
        },
      });
      
      return {
        ...(await this.mailerService.mailForgotPassword(email, code)),
        message: 'check ur mail',
      };
    }else{
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);

    }
  }

  async verificationCode(code: string, email: string) {
  
    
    const result = await this.prisma.user.findUnique({
      where: { email },
     
    });
    console.log(result,"result");

    if (result?.confirmKey == code) {
      const { password: p, confirmKey: k, ...rest } = result;
      const token = await this.jwt.sign(rest);
      console.log(token,"token");
      return token;
      
    } else {
      throw new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }
  async changePassword(
    email: string,
    password: string,
    confirmPassword: string,
  ) 
  {
    if (confirmPassword === password) {
      const result = await this.prisma.user.findUnique({
        where: {
          email,
        },   });
        if (email) {
          const salt = await bcrypt.genSalt();
          const user = await this.prisma.user.update({
            where: { id: result.id },
            data: { password: await bcrypt.hash(password, salt) },
          });
          const { password: p, confirmKey:k, ...rest } = user;
          return rest;
        }
      } else {
        throw new HttpException('passwords not match ', HttpStatus.BAD_REQUEST);
      }
    }

  async updateMe(dto: UpdateUserDto, id: string) {
    if (dto['password']) {
      throw new HttpException(
        'Vous ne pouvez pas modifier le mot de passe',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (dto.email) {
      const existingUser = await this.prisma.user.findFirst({
        where: {
          email: dto.email,
          id: {
            not : id, // Exclude the current user
          },
        },
      });

      if (existingUser) {
        throw new HttpException(
          "L'adresse e-mail est déjà utilisée",
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: id },
      data: dto,
    });

    const { password, ...rest } = updatedUser;
    const token = this.jwt.sign(rest);
    return token;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }
  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
