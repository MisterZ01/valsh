import { Module } from '@nestjs/common';
import { CommuneController } from './controllers/commune/commune.controller';
import { CommuneService } from './services/commune/commune.service';
import { Commune } from 'src/models/commune.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Commune])],
    controllers : [CommuneController],
    providers : [CommuneService]
})
export class CommuneModule {}
