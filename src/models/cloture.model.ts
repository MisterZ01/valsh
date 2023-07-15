import { Accessibilite } from 'src/models/accessibilite.model';
import { Model, Column, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';



@Table({ tableName: 'cloture' })
export class Cloture extends Model {

  @Column({
    primaryKey: true,
    autoIncrement: true

  })
  id: number;
  
  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_cloture: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_cloture: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  type_cloture: string;

  @ForeignKey(() => Accessibilite)
  @Column
   id_accessibilite : number;
   @BelongsTo(() => Accessibilite)
   accessibilite: Accessibilite;

   
   @HasMany(() => Rapport)
   rapports: Rapport[];
}