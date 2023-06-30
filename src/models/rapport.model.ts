import { Model, Column, Table, HasMany } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Equipe } from './equipe.model';



@Table({ tableName: 'rapport' })
export class Rapport extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  titre_rapport: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  date_finition: Date;

  @HasMany(() => Equipe)
  equipes: Equipe[];
}