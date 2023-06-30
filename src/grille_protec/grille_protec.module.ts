import { Module } from '@nestjs/common';
import { Grille_protec } from 'src/models/grille_protec.model';
import { GrilleProtecController } from './controllers/grille_protec/grille_protec.controller';
import { GrilleProtecService } from './services/grille_protec/grille_protec.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Grille_protec])],
    controllers : [GrilleProtecController],
    providers : [GrilleProtecService]
})
export class GrilleProtecModule {}
