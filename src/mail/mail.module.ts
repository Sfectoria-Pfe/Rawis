import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [

    // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
    // or
    MailerModule.forRoot({
      transport: {
        service: 'Gmail',
        auth: {
          user: 'siwarzelfanitn@gmail.com',
          pass: 'dubeexjeelyxhjew'
        }
      },
      defaults: {
        from: 'siwarzelfanitn@gmail.com',
      },
      template: {
        dir: __dirname + '/templates',
        // adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService,PrismaService],
  exports: [MailService], // 👈 export for DI
})
export class MailModule { }




