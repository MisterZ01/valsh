import { Localtechnique } from 'src/models/localtechnique.model';
import { Model, Column, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';




@Table({ tableName: 'operateur' })
export class Operateur extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nomoperateur: string;


  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typelocal: string;

  @ForeignKey(() => Localtechnique)
  @Column
   id_localtechnique : number;
   @BelongsTo(() => Localtechnique)
   localtechnique: Localtechnique;
}