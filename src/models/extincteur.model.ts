import { Localtechnique } from 'src/models/localtechnique.model';
import { Model, Column, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';



@Table({ tableName: 'extincteur' })
export class Extincteur extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_extincteur: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  validite: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nbre_extincteur: number;

  @ForeignKey(() => Localtechnique)
  @Column
   id_localtechnique : number;
   @BelongsTo(() => Localtechnique)
   localtechnique: Localtechnique;

   
   @HasMany(() => Rapport)
   rapports: Rapport[];
}