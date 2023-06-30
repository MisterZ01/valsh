import { Model, Column, Table, HasMany, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { Terrasse_sol } from './terrasse_sol.model';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'etancheitemassif' })
export class Etancheitemassif extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;


  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_etancheitemassif: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_etancheitemassif: string;

  @ForeignKey(() => Terrasse_sol)
  @Column
   id_terrasse_sol : number;
   @BelongsTo(() => Terrasse_sol)
   terrasse_sol: Terrasse_sol;
}