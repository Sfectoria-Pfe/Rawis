import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService,
    private readonly nodeMailerService: MailService,
  ) { }
  // async create(dto: CreateUserDto) {
  //   const { password, ...rest } = dto
  //   const salt = await bcrypt.genSalt()
  //   const hashpassword = await bcrypt.hash(password, salt)
  //   return await this.prisma.user.create({ data: { password: hashpassword, ...rest } });
  // }

  async createEns(dto: CreateUserDto) {
    console.log('hello')
    const { email, ...rest } = dto;
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += Math.floor(Math.random() * 9);
    }
    const salt = await bcrypt.genSalt();
    const hachedPassword = await bcrypt.hash(code, salt);
    const user = await this.prisma.user.create({
      data: {
        ...rest,
            email,
            password: hachedPassword,
            role : 'Enseignant'
      },
    });
    console.log(user)
    await this.nodeMailerService.mailForgotPassword(email, code);
    return 'User created';
  }

  async createEtd(dto: CreateUserDto) {
    const { email, ...rest } = dto;
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += Math.floor(Math.random() * 9);
    }
    const salt = await bcrypt.genSalt();
    const hachedPassword = await bcrypt.hash(code, salt);
    await this.prisma.user.create({
      data: {
        ...rest,
            email,
            password: hachedPassword,
            role : 'Etudiant'
      },
    });
    await this.nodeMailerService.mailForgotPassword(email, code);
    return 'User created';
  }

 async findAll() {
    return await this.prisma.user.findMany();
  }

  async findAllEns() {
    return await this.prisma.user.findMany({where : {role : 'Enseignant'}});
  }

  async findAllEtd() {
    return await this.prisma.user.findMany({where : {role : 'Etudiant'}});
  }

 async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  findOneEns(id: string) {
    return this.prisma.user.findUnique({where : {id,role : "Enseignant"}, include: {Enseignement: {include:{Cours : true}}} });
  }

  findOneEtd(id: string) {
    return this.prisma.user.findUnique({where : {id,role :"Etudiant"}, include: {Inscrire: {include:{Cours : true}}} });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
