import { Module } from '@nestjs/common';
import { ClimatisationService } from './services/climatisation/climatisation.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Climatisation } from 'src/models/climatisation.model';
import { ClimatisationController } from './controllers/climatisation/climatisation.controller';


@Module({

  imports : [SequelizeModule.forFeature([Climatisation])],
  controllers : [ClimatisationController],
  providers: [ClimatisationService]
})
export class ClimatisationModule {}
