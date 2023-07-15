import { Terrasse_sol } from 'src/models/terrasse_sol.model';
import { Grille_protec } from 'src/models/grille_protec.model';
import { Accessibilite } from './accessibilite.model';
import { Ville_quartier } from 'src/models/ville_quartier.model';
import { Model, Column, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Equipe } from './equipe.model';
import { Site } from './site.model';
import { Operateur } from './operateur.model';
import { Commune } from './commune.model';
import { Departement } from './departement.model';
import { Region } from './region.model';
import { Climatisation } from './climatisation.model';
import { Cloture } from './cloture.model';
import { Controlenv } from './controlenv.model';
import { Emprise } from './emprise.model';
import { Etancheitemassif } from './etancheitemassif.model';
import { Etancheitesite } from './etancheitesite.model';
import { Evacuation } from './evacuation.model';
import { Extincteur } from './extincteur.model';
import { Garde_corps } from './garde_corps.model';
import { Image } from './image.model';
import { Localtechnique } from './localtechnique.model';
import { Plaquesignal } from './plaquesignal.model';
import { Portail } from './portail.model';
import { Serrure } from './serrure.model';
import { Synthese } from './synthese.model';
import { Systemeverrouillage } from './systemeverrouillage.model';



@Table({ tableName: 'rapport' })
export class Rapport extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  titre_rapport: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  date_debut: Date;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  statut: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  date_finition: Date;

  @ForeignKey(() => Equipe)
  @Column 
  id_equipe : number
  @BelongsTo(() => Equipe)
  Equipe : Equipe;

  @ForeignKey(() => Site)
  @Column 
  id_site : number
  @BelongsTo(() => Site)
  site : Site;

  @ForeignKey(() => Operateur)
  @Column 
  id_operateur : number
  @BelongsTo(() => Operateur)
  operateur : Operateur;

  @ForeignKey(() => Ville_quartier)
  @Column 
  id_ville_quartier : number
  @BelongsTo(() => Ville_quartier)
  ville_quartier : Ville_quartier;

  @ForeignKey(() => Commune)
  @Column 
  id_commune : number
  @BelongsTo(() => Commune)
  commune : Commune;

  @ForeignKey(() => Departement)
  @Column 
  id_departement : number
  @BelongsTo(() => Departement)
  departement : Departement;

  @ForeignKey(() => Region)
  @Column 
  id_region : number
  @BelongsTo(() => Region)
  region : Region;

  @ForeignKey(() => Accessibilite)
  @Column 
  id_accessibilite : number
  @BelongsTo(() => Accessibilite)
  accessibilite : Accessibilite;

  @ForeignKey(() => Climatisation)
  @Column 
  id_climatisation : number
  @BelongsTo(() => Climatisation)
  climatisation : Climatisation;

  @ForeignKey(() => Cloture)
  @Column 
  id_cloture : number
  @BelongsTo(() => Cloture)
  cloture : Cloture;

  @ForeignKey(() => Controlenv)
  @Column 
  id_controlenv : number
  @BelongsTo(() => Controlenv)
  controlenv : Controlenv;

  @ForeignKey(() => Emprise)
  @Column 
  id_emprise : number
  @BelongsTo(() => Emprise)
  emprise : Emprise;

  @ForeignKey(() => Etancheitemassif)
  @Column 
  id_etancheitemassif : number
  @BelongsTo(() => Etancheitemassif)
  etancheitemassif : Etancheitemassif;

  @ForeignKey(() => Etancheitesite)
  @Column 
  id_etancheitesite : number
  @BelongsTo(() => Etancheitesite)
  etancheitesite : Etancheitesite;

  @ForeignKey(() => Evacuation)
  @Column 
  id_evacuation : number
  @BelongsTo(() => Evacuation)
  evacuation : Evacuation;

  @ForeignKey(() => Extincteur)
  @Column 
  id_extincteur : number
  @BelongsTo(() => Extincteur)
  extincteur : Extincteur;

  @ForeignKey(() => Garde_corps)
  @Column 
  id_garde_corps: number
  @BelongsTo(() => Garde_corps)
  garde_corps : Garde_corps;

  @ForeignKey(() => Grille_protec)
  @Column 
  id_grille_protec: number
  @BelongsTo(() => Grille_protec)
  grille_protec : Grille_protec;

  @ForeignKey(() => Image)
  @Column 
  id_image: number
  @BelongsTo(() => Image)
  image : Image;

  @ForeignKey(() => Localtechnique)
  @Column 
  id_localtechnique: number
  @BelongsTo(() => Localtechnique)
  localtechnique : Localtechnique;

  @ForeignKey(() => Plaquesignal)
  @Column 
  id_plaquesignal: number
  @BelongsTo(() => Plaquesignal)
  plaquesignal : Plaquesignal;

  @ForeignKey(() => Portail)
  @Column 
  id_portail: number
  @BelongsTo(() => Portail)
  portail : Portail;

  @ForeignKey(() => Serrure)
  @Column 
  id_serrure: number
  @BelongsTo(() => Serrure)
  serrure : Serrure;

  @ForeignKey(() => Synthese)
  @Column 
  id_synthese: number
  @BelongsTo(() => Synthese)
  synthese : Synthese;

  @ForeignKey(() => Systemeverrouillage)
  @Column 
  id_systemeverrouillage: number
  @BelongsTo(() => Systemeverrouillage)
  systemeverrouillage : Systemeverrouillage;

  @ForeignKey(() => Terrasse_sol)
  @Column 
  id_terrasse_sol: number
  @BelongsTo(() => Terrasse_sol)
  terrasse_sol : Terrasse_sol;
}