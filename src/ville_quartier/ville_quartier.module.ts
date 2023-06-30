import { Ville_quartier } from 'src/models/ville_quartier.model';
import { Module } from '@nestjs/common';
import { VilleQuartierController } from './controllers/ville_quartier/ville_quartier.controller';
import { VilleQuartierService } from './services/ville_quartier/ville_quartier.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Ville_quartier])],
    controllers : [VilleQuartierController],
    providers : [VilleQuartierService]
})
export class VilleQuartierModule {}
