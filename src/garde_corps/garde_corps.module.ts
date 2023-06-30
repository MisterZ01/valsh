import { Module } from '@nestjs/common';
import { Garde_corps } from 'src/models/garde_corps.model';
import { GardeCorpsController } from './controllers/garde_corps/garde_corps.controller';
import { GardeCorpsService } from './services/garde_corps/garde_corps.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Garde_corps])],
    controllers : [GardeCorpsController],
    providers : [GardeCorpsService]
})
export class GardeCorpsModule {}
