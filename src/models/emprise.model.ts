import { Terrasse_sol } from 'src/models/terrasse_sol.model';
import { Model, Column, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'emprise' })
export class Emprise extends Model {

  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_proximite_emprise: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_emprise: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  precision_emprise: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  distancesite_emprise: number;

  @ForeignKey(() => Terrasse_sol)
  @Column
   id_terrasse_sol : number;
   @BelongsTo(() => Terrasse_sol)
   terrasse_sol: Terrasse_sol;
}