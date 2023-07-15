import { Plaquesignal } from 'src/models/plaquesignal.model';
import { Portail } from 'src/models/portail.model';
import { Cloture } from 'src/models/cloture.model';
import { Serrure } from 'src/models/serrure.model';
import { Model, Column, Table, HasMany, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Site } from './site.model';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';


@Table({ tableName: 'accessibilite' })
export class Accessibilite extends Model {

  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  cheminaccess: string;

  @HasMany(() => Site)
  sites: Site[];

   @HasMany(() => Serrure)
   serrures: Serrure[];

   @HasMany(() => Cloture)
   clotures: Cloture[];

   @HasMany(() => Portail)
   portails: Portail[];

   @HasMany(() => Plaquesignal)
   plaquesignals: Plaquesignal[];

   @HasMany(() => Rapport)
   rapports: Rapport[];
}
