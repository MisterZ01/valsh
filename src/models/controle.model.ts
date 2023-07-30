import { IsNotEmpty, IsString } from "class-validator";
import { Model } from "sequelize";
import { Column, Table } from "sequelize-typescript";

@Table({ tableName: 'controle' })
export class Equipe extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;


  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  conformite: string;

}