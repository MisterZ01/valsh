import { Module } from '@nestjs/common';
import { Cloture } from 'src/models/cloture.model';
import { ClotureController } from './controllers/cloture/cloture.controller';
import { ClotureService } from './services/cloture/cloture.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports : [SequelizeModule.forFeature([Cloture])],
    controllers : [ClotureController],
    providers : [ClotureService]
})
export class ClotureModule {}
