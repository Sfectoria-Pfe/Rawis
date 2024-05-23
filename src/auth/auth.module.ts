import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';

//export const jwtSecret = 'zjP9h6ZI5LoSKCRj';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'zjP9h6ZI5LoSKCRj',
      signOptions: { expiresIn: '600000000000000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,PrismaService,MailService],
})
export class AuthModule {}
