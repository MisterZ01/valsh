import { Module } from '@nestjs/common';
import { Plaquesignal } from 'src/models/plaquesignal.model';
import { PlaquesignalController } from './controllers/plaquesignal/plaquesignal.controller';
import { PlaquesignalService } from './services/plaquesignal/plaquesignal.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Plaquesignal])],
    controllers : [PlaquesignalController],
    providers : [PlaquesignalService]
})
export class PlaquesignalModule {}
