import { Terrasse_sol } from 'src/models/terrasse_sol.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';




@Table({ tableName: 'evacuation' })
export class Evacuation extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true

  })
  id : number;


  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presencesysteme_evacuation: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatsysteme_evacuation: string;

  @ForeignKey(() => Terrasse_sol)
  @Column
   id_terrasse_sol : number;
   @BelongsTo(() => Terrasse_sol)
   terrasse_sol: Terrasse_sol;

   
   @HasMany(() => Rapport)
   rapports: Rapport[];
}