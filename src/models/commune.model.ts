import { Departement } from 'src/models/departement.model';
import { Ville_quartier } from 'src/models/ville_quartier.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';




@Table({ tableName: 'commune' })
export class Commune extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_commune: string;

   @HasMany(() => Ville_quartier)
   ville_quartiers: Ville_quartier[];
  
  @Column({ defaultValue: new Date() })
  createdAt: Date;

  @Column({ defaultValue: new Date() })
  updatedAt: Date;

  @ForeignKey(() => Departement)
  @Column
   id_departement : number;
   @BelongsTo(() => Departement)
   communes: Departement;

   @HasMany(() => Rapport)
   rapports: Rapport[];
}
 