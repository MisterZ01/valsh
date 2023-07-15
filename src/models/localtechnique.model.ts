import { Operateur } from 'src/models/operateur.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Extincteur } from './extincteur.model';
import { Systemeverrouillage } from './systemeverrouillage.model';
import { Site } from './site.model';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';



@Table({ tableName: 'localtechnique' })
export class Localtechnique extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true,
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatlocal: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typelocal: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatboulonnerie: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatassessoire: string;

  @HasMany(() => Extincteur)
  extincteurs: Extincteur[];

  @HasMany(() => Systemeverrouillage)
  systemeverrouillages: Systemeverrouillage[];

  @HasMany(() => Operateur)
  operateurs: Operateur[];

   @HasMany(() => Site)
   sites : Site[]

   
   @HasMany(() => Rapport)
   rapports: Rapport[];

}