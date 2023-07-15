import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Commune } from './commune.model';
import { Region } from './region.model';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';



@Table({ tableName: 'departement' })
export class Departement extends Model {

  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id_departement: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_departement: string;

 @HasMany(() => Commune)
   communes : Commune[];


   @ForeignKey(() => Region)
   @Column({allowNull: true})
   id_region : number;
   @BelongsTo(() => Region)
   region: Region;

   @Column({ defaultValue: new Date() })
   createdAt: Date;
 
   @Column({ defaultValue: new Date() })
   updatedAt: Date;

   @HasMany(() => Rapport)
   rapports: Rapport[];
}