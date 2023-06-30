import { Ville_quartier } from 'src/models/ville_quartier.model';
import { Climatisation } from 'src/models/climatisation.model';
import { Accessibilite } from 'src/models/accessibilite.model';
import { Localtechnique } from 'src/models/localtechnique.model';
import { Model, Column, Table, HasMany, ForeignKey, HasOne, BelongsTo } from 'sequelize-typescript';
import { Terrasse_sol } from './terrasse_sol.model';
import { Controlenv } from './controlenv.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'site' })
export class Site extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typenv: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nomsite: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  situationgeo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  densite: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typologie: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  station: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  localtec: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  plaqueident: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  datemiseservice: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  hauteurbatiment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  latitude: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  longitude: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  altitude: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  vigile: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nbrevigile: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  societegardiennagevigile: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typstation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  observation: string;

  @ForeignKey(() => Localtechnique)
  @Column
   id_localtechique : number;
   @BelongsTo(() => Localtechnique)
   localtechnique: Localtechnique;

  @ForeignKey(() => Accessibilite)
  @Column
   id_accessibilite : number;
   @BelongsTo(() => Accessibilite)
   accessibilite: Accessibilite;

  @ForeignKey(() => Terrasse_sol)
  @Column
   id_terrasse_sol : number;
   @BelongsTo(() => Terrasse_sol)
   terrasse_sol: Terrasse_sol;

  @ForeignKey(() => Climatisation)
  @Column
   id_climatisation : number;
   @BelongsTo(() => Climatisation)
   climatisation: Climatisation;

   @ForeignKey(() => Controlenv)
   @Column
    id_controlenv : number;
    @BelongsTo(() => Controlenv)
    controlenv: Controlenv;

   @ForeignKey(() => Ville_quartier)
   @Column
    id_ville_quartier : number;
   @BelongsTo(() => Ville_quartier)
   ville_quartier : Ville_quartier;
}