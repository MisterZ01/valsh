import { Controlenv } from 'src/models/controlenv.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';



@Table({ tableName: 'synthese' })
export class Synthese extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  partieconcernee: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  anormalies: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  recommandations: string;

  @ForeignKey(() => Controlenv)
  @Column
   id_controlenv:number;
   @BelongsTo(() => Controlenv)
   controlenv: Controlenv;

   
   @HasMany(() => Rapport)
   rapports: Rapport[];

}