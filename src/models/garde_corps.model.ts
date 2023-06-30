import { Terrasse_sol } from 'src/models/terrasse_sol.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'garde_corps' })
export class Garde_corps extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presence_garde_corps: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etat_garde_corps: string;

  @ForeignKey(() => Terrasse_sol)
  @Column
   id_terrasse_sol : number;
   @BelongsTo(() => Terrasse_sol)
   terrasse_sol: Terrasse_sol;
}