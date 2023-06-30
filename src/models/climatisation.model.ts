import { Grille_protec } from 'src/models/grille_protec.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Site } from './site.model';
import { IsNotEmpty, IsString } from 'class-validator';



@Table({ tableName: 'climatisation' })
export class Climatisation extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  presenceclim: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatclim: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  nbreclim: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  typeclim: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etancheiteconnexion: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  condenseur: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  tuyauterieclim: string;

  @HasMany(() => Site)
  sites: Site[];

  @HasMany(() => Grille_protec)
  grille_protecs: Grille_protec[];


}
