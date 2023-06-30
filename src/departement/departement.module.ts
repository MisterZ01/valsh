import { Module } from '@nestjs/common';
import { Departement } from 'src/models/departement.model';
import { DepartementController } from './controllers/departement/departement.controller';
import { DepartementService } from './services/departement/departement.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Departement])],
    controllers : [DepartementController],
    providers : [DepartementService]
})
export class DepartementModule {}
