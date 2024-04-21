import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursModule } from './cours/cours.module';
import { ScoresModule } from './scores/scores.module';
import { VersionsModule } from './versions/versions.module';
import { ChapitresModule } from './chapitres/chapitres.module';
import { QuizsModule } from './quizs/quizs.module';
import { ReponsesQModule } from './reponses-q/reponses-q.module';
import { PropsQcmModule } from './props-qcm/props-qcm.module';
import { EnseignementsModule } from './enseignements/enseignements.module';
import { ReponsesExrModule } from './reponses-exr/reponses-exr.module';
import { ExercicesModule } from './exercices/exercices.module';
import { ContactsModule } from './contacts/contacts.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, CoursModule, ScoresModule, VersionsModule, ChapitresModule, QuizsModule, ReponsesQModule, PropsQcmModule, EnseignementsModule, ReponsesExrModule, ExercicesModule, ContactsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
