import { Module } from '@nestjs/common';
import { Localtechnique } from 'src/models/localtechnique.model';
import { LocaltechniqueController } from './controllers/localtechnique/localtechnique.controller';
import { LocaltechniqueService } from './services/localtechnique/localtechnique.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports : [SequelizeModule.forFeature([Localtechnique])],
    controllers : [LocaltechniqueController],
    providers : [LocaltechniqueService]
})
export class LocaltechniqueModule {}
