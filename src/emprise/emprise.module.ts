import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Emprise } from 'src/models/emprise.model';
import { EmpriseController } from './controllers/emprise/emprise.controller';
import { EmpriseService } from './services/emprise/emprise.service';

@Module({

    imports : [SequelizeModule.forFeature([Emprise])],
    controllers : [EmpriseController],
    providers : [EmpriseService]
})
export class EmpriseModule {}
