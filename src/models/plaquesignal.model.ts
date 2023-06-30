import { Accessibilite } from 'src/models/accessibilite.model';
import { Model, Column, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'plaquesignal' })
export class Plaquesignal extends Model {
  @Column({

    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_plaquesignal: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_plaquesignal: string;

  @ForeignKey(() => Accessibilite)
  @Column
   id_accessibilite : number;
   @BelongsTo(() => Accessibilite)
   accessibilite: Accessibilite;
}