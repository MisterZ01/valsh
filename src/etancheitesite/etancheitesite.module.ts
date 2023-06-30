import { Module } from '@nestjs/common';
import { Etancheitesite } from 'src/models/etancheitesite.model';
import { EtancheitesiteController } from './controllers/etancheitesite/etancheitesite.controller';
import { EtancheitesiteService } from './services/etancheitesite/etancheitesite.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Etancheitesite])],
    controllers : [EtancheitesiteController],
    providers : [EtancheitesiteService]
})
export class EtancheitesiteModule {}
