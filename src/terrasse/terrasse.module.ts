import { Module } from '@nestjs/common';
import { Terrasse_sol } from 'src/models/terrasse_sol.model';
import { TerrasseController } from './controllers/terrasse/terrasse.controller';
import { TerrasseService } from './services/terrasse/terrasse.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Terrasse_sol])],
    controllers : [TerrasseController],
    providers : [TerrasseService]
})
export class TerrasseModule {}
