import { Evacuation } from 'src/models/evacuation.model';
import { Garde_corps } from 'src/models/garde_corps.model';
import { Emprise } from 'src/models/emprise.model';
import { Etancheitemassif } from 'src/models/etancheitemassif.model';
import { Etancheitesite } from 'src/models/etancheitesite.model';
import { Model, Column, Table, HasMany, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Site } from './site.model';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';



@Table({ tableName: 'terrasse_sol' })
export class Terrasse_sol extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  hauteurterrasse: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  etatterrasse: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  revetement_espace: string;

  @HasMany(() => Site)
  sites: Site[];

   @HasMany(() => Etancheitesite)
   etancheitesites: Etancheitesite[];

   @HasMany(() => Etancheitemassif)
   etancheitemassifs: Etancheitemassif[];

   @HasMany(() => Evacuation)
   evacuations: Evacuation[];

   @HasMany(() => Emprise)
   emprises: Emprise[];

   @HasMany(() => Garde_corps)
   garde_corpss: Garde_corps[];

   
   @HasMany(() => Rapport)
   rapports: Rapport[];

}