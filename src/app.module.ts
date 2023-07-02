import { Image } from './models/image.model';
import { Commune } from './models/commune.model';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Accessibilite } from 'src/models/accessibilite.model';
import { Climatisation } from 'src/models/climatisation.model';
import { Cloture } from 'src/models/cloture.model';
import { Controlenv } from 'src/models/controlenv.model';
import { Departement } from 'src/models/departement.model';
import { Emprise } from 'src/models/emprise.model';
import { Equipe } from 'src/models/equipe.model';
import { Etancheitemassif } from 'src/models/etancheitemassif.model';
import { Evacuation } from 'src/models/evacuation.model';
import { Etancheitesite } from 'src/models/etancheitesite.model';
import { Extincteur } from 'src/models/extincteur.model';
import { Garde_corps } from 'src/models/garde_corps.model';
import { Grille_protec } from 'src/models/grille_protec.model';
import { Localtechnique } from 'src/models/localtechnique.model';
import { Membreequipe } from 'src/models/membreequipe.model';
import { Operateur } from 'src/models/operateur.model';
import { Plaquesignal } from 'src/models/plaquesignal.model';
import { Portail } from 'src/models/portail.model';
import { Region } from 'src/models/region.model';
import { Serrure } from 'src/models/serrure.model';
import { Site } from 'src/models/site.model';
import { Synthese } from 'src/models/synthese.model';
import { Systemeverrouillage } from 'src/models/systemeverrouillage.model';
import { Terrasse_sol } from 'src/models/terrasse_sol.model';
import { Utilisateur } from 'src/models/utilisateur.model';
import { Ville_quartier } from 'src/models/ville_quartier.model';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';
import { AccessibiliteModule } from './accessibilite/accessibilite.module';
import { ClimatisationModule } from './climatisation/climatisation.module';
import { ClotureModule } from './cloture/cloture.module';
import { CommuneModule } from './commune/commune.module';
import { ControlenvModule } from './controlenv/controlenv.module';
import { DepartementModule } from './departement/departement.module';
import { EmpriseModule } from './emprise/emprise.module';
import { EquipeModule } from './equipe/equipe.module';
import { EtancheitemassifsModule } from './etancheitemassif/etancheitemassif.module';
import { EtancheitesiteModule } from './etancheitesite/etancheitesite.module';
import { EvacuationModule } from './evacuation/evacuation.module';
import { ExtincteurModule } from './extincteur/extincteur.module';
import { GardeCorpsModule } from './garde_corps/garde_corps.module';
import { GrilleProtecModule } from './grille_protec/grille_protec.module';
import { ImageModule } from './image/image.module';
import { LocaltechniqueModule } from './localtechnique/localtechnique.module';
import { MembreequipeModule } from './membreequipe/membreequipe.module';
import { OperateurModule } from './operateur/operateur.module';
import { PlaquesignalModule } from './plaquesignal/plaquesignal.module';
import { PortailModule } from './portail/portail.module';
import { RegionModule } from './region/region.module';
import { SerrureModule } from './serrure/serrure.module';
import { SiteModule } from './site/site.module';
import { SyntheseModule } from './synthese/synthese.module';
import { SystemeverrouillageModule } from './systemeverrouillage/systemeverrouillage.module';
import { TerrasseModule } from './terrasse/terrasse.module';
import { VilleQuartierModule } from './ville_quartier/ville_quartier.module';
import { RapportModule } from './rapport/rapport.module';
import { Rapport } from './models/rapport.model';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    PassportModule.register({defaultStrategy:'jwt'}),

    MulterModule.register({dest: './uploads'}),
    
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'rapportdeux',
      autoLoadModels: true,
     synchronize : true,
      models:[
        Accessibilite,
        Climatisation,
        Cloture,
        Commune,
        Controlenv,
        Departement,
        Emprise,
        Equipe,
        Etancheitemassif,
        Evacuation,
        Etancheitesite,
        Extincteur,
        Garde_corps,
        Grille_protec,
        Localtechnique,
        Membreequipe,
        Operateur,
        Plaquesignal,
        Portail,
        Region,
        Serrure,
        Site,
        Synthese ,
        Systemeverrouillage,
        Terrasse_sol,
        Utilisateur,
        Ville_quartier,
        Image,
        Rapport
      ]
    }),
    
    UtilisateurModule,
    
    AccessibiliteModule,
    
    ClimatisationModule,
    
    ClotureModule,
    
    CommuneModule,
    
    ControlenvModule,
    
    DepartementModule,
    
    EmpriseModule,
    
    EquipeModule,
    
    EtancheitemassifsModule,
    
    EtancheitesiteModule,
    
    EvacuationModule,
    
    ExtincteurModule,
    
    GardeCorpsModule,
    
    GrilleProtecModule,
    
    ImageModule,
    
    LocaltechniqueModule,
    
    MembreequipeModule,
    
    OperateurModule,
    
    PlaquesignalModule,
    
    PortailModule,
    
    RegionModule,
    
    SerrureModule,
    
    SiteModule,
    
    SyntheseModule,
    
    SystemeverrouillageModule,
    
    TerrasseModule,
    
    VilleQuartierModule,
    
    RapportModule,
    
    AuthModule,

  
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
