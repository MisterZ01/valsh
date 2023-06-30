import { Departement } from 'src/models/departement.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';




@Table({ tableName: 'region' })
export class Region extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id_region: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nom_region: string;

  @Column({ defaultValue: new Date() })
  createdAt: Date;

  @Column({ defaultValue: new Date() })
  updatedAt: Date;

  @HasMany(() => Departement)
  departements : Departement[];
}