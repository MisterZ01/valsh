import { Model, Column, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';
import { Equipe } from './equipe.model';
import { Site } from './site.model';



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
  date_debut: Date;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  statut: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  date_finition: Date;

  @ForeignKey(() => Equipe)
  @Column 
  id_equipe : number
  @BelongsTo(() => Equipe)
  Equipe : Equipe;

  @ForeignKey(() => Site)
  @Column 
  id_site : number
  @BelongsTo(() => Site)
  site : Site;
}