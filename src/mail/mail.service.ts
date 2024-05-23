import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';




@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }

    async mailForgotPassword(email:string,code:string){
        const result = await this.mailerService
            .sendMail({
                to: email,
                from: 'siwarzelfanitn@gmail.com',
                subject: 'Test Mailer ✔',
                text: 'welcome',
                html: `<h1>welcome her's your password</h1><p>${code}</p>`,
                
            })
            // .then((result) => {
            //     console.log(result);
            //     console.log('==Result==');
                
            // })
            // .catch((error) => {
            //     console.log(error);
            //     console.log('==Error==');
            // });
            console.log(result)
            return result;
            
    }




}