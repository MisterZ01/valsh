import { Module } from '@nestjs/common';
import { Etancheitemassif } from 'src/models/etancheitemassif.model';
import { EtancheitemassifController } from './controllers/etancheitemassif/etancheitemassif.controller';
import { EtancheitemassifService } from './services/etancheitemassif/etancheitemassif.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Etancheitemassif])],
    controllers : [EtancheitemassifController],
    providers : [EtancheitemassifService]
})
export class EtancheitemassifsModule {}
