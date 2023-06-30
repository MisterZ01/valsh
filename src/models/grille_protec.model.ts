import { Climatisation } from 'src/models/climatisation.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';




@Table({ tableName: 'grille_protec' })
export class Grille_protec extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;


  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_grille: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_grille: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  observation: string;

  @ForeignKey(() => Climatisation)
  @Column
   id_climatisation : number;
   @BelongsTo(() => Climatisation)
   climatisation: Climatisation;
}