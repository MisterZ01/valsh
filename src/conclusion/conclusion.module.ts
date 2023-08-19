import { Module } from '@nestjs/common';
import { ConclusionController } from './controllers/conclusion/conclusion.controller';
import { ConclusionService } from './services/conclusion/conclusion.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([])],
    controllers : [ConclusionController],
    providers : [ConclusionService]
})
export class ConclusionModule {}
