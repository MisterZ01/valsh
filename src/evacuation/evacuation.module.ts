import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Evacuation } from 'src/models/evacuation.model';
import { EvacuationController } from './controllers/evacuation/evacuation.controller';
import { EvacuationService } from './services/evacuation/evacuation.service';

@Module({

    imports : [SequelizeModule.forFeature([Evacuation])],
    controllers : [EvacuationController],
    providers : [EvacuationService]
})
export class EvacuationModule {}
