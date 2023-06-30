import { Accessibilite } from 'src/models/accessibilite.model';
import { Model, Column, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'serrure' })
export class Serrure extends Model {


  @Column({
    primaryKey: true,
    autoIncrement: true, 
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_serrure: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_serrure: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  telemetrie: string;

  @ForeignKey(() => Accessibilite)
  @Column
   id_accessibilite : number;
   @BelongsTo(() => Accessibilite)
   accessibilite: Accessibilite;
}