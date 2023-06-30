import { Terrasse_sol } from 'src/models/terrasse_sol.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'etancheitesite' })
export class Etancheitesite extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;


  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_etancheitesite: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_etancheitesite: string;

  @ForeignKey(() => Terrasse_sol)
  @Column
   id_terrasse_sol : number;
   @BelongsTo(() => Terrasse_sol)
   terrasse_sol: Terrasse_sol;
}