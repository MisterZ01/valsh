import { Module } from '@nestjs/common';
import { Region } from 'src/models/region.model';
import { RegionController } from './controllers/region/region.controller';
import { RegionService } from './services/region/region.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Region])],
    controllers : [RegionController],
    providers : [RegionService]
})
export class RegionModule {}
