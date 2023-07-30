import { IsNotEmpty, IsString, } from "class-validator";
import { Model } from "sequelize";
import { Column, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Rapport } from "./rapport.model";

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

  
  @ForeignKey(() => Rapport)
  @Column 
  id_rapport : number
  @BelongsTo(() => Rapport)
  rapport : Rapport;

}