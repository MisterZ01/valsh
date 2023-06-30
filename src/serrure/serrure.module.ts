import { Module } from '@nestjs/common';
import { Serrure } from 'src/models/serrure.model';
import { SerrureController } from './controllers/serrure/serrure.controller';
import { SerrureService } from './services/serrure/serrure.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Serrure])],
    controllers : [SerrureController],
    providers : [SerrureService]
})
export class SerrureModule {
}
