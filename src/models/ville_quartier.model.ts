import { Commune } from './commune.model';
import { Site } from 'src/models/site.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'ville_quartier' })
export class Ville_quartier extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_ville_quartier: string;


  @Column({ defaultValue: new Date() })
  createdAt: Date;

  @Column({ defaultValue: new Date() })
  updatedAt: Date;

 
  
   @HasMany(() => Site)
   sites: Site[];

   @ForeignKey(() => Commune)
   @Column
   id_commune : number;
   @BelongsTo(() => Commune)
   commune : Commune;
}