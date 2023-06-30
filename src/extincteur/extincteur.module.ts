import { Module } from '@nestjs/common';
import { Extincteur } from 'src/models/extincteur.model';
import { ExtincteurController } from './controllers/extincteur/extincteur.controller';
import { ExtincteurService } from './services/extincteur/extincteur.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Extincteur])],
    controllers : [ExtincteurController],
    providers : [ExtincteurService]
})
export class ExtincteurModule {}
