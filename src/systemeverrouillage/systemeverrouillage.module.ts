import { Module } from '@nestjs/common';
import { Systemeverrouillage } from 'src/models/systemeverrouillage.model';
import { SystemeverrouillageController } from './controllers/systemeverrouillage/systemeverrouillage.controller';
import { SystemeverrouillageService } from './services/systemeverrouillage/systemeverrouillage.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Systemeverrouillage])],
    controllers : [SystemeverrouillageController],
    providers : [SystemeverrouillageService]
})
export class SystemeverrouillageModule {}
