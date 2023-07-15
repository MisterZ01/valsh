import { IsNotEmpty, IsString } from 'class-validator';
import { Localtechnique } from './localtechnique.model';
import { Model, Column, Table, BelongsTo, HasMany, HasOne,ForeignKey } from 'sequelize-typescript';
import { Rapport } from './rapport.model';



@Table({ tableName: 'systemeverrouillage' })
export class Systemeverrouillage extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presencesysteme_verrouillage: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatsysteme_verrouillage: string;

  @ForeignKey(() => Localtechnique)
  @Column
   id_localtechnique : number;
   @BelongsTo(() => Localtechnique)
   localtechnique: Localtechnique;

   
   @HasMany(() => Rapport)
   rapports: Rapport[];
}


