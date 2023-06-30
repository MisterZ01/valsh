import { Module } from '@nestjs/common';
import { PortailService } from './services/portail/portail.service';
import { Portail } from 'src/models/portail.model';
import { PortailController } from './controllers/portail/portail.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Portail])],
    controllers : [PortailController],
    providers : [PortailService]
})
export class PortailModule {}
