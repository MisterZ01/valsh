import { Accessibilite } from 'src/models/accessibilite.model';
import { Model, Column, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'portail' })
export class Portail extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_portail: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_portail: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  type_portail: string;

  @ForeignKey(() => Accessibilite)
  @Column
   id_accessibilite : number;
   @BelongsTo(() => Accessibilite)
   accessibilite: Accessibilite;
}