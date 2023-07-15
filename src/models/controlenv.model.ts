import { Synthese } from 'src/models/synthese.model';
import { Site } from 'src/models/site.model';
import { Model, Column, Table, BelongsTo, ForeignKey , HasOne, HasMany } from 'sequelize-typescript';
import { Equipe } from './equipe.model';
import { Image } from './image.model';
import { IsNotEmpty, IsString } from 'class-validator';
import { Rapport } from './rapport.model';





@Table({ tableName: 'controlenv' })
export class Controlenv extends Model {
  @Column({
    primaryKey: true,
    autoIncrement : true,
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  datecontrole : Date;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  heuredebutcontrole : string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  heurefincontrole : string;

  @ForeignKey(() => Equipe)
  @Column
   id_equipe : number;
   @BelongsTo(() => Equipe)
   equipe: Equipe;


   @HasMany(() => Site)
   sites: Site[];

   @HasMany(() => Image)
   images: Image[];

   @HasOne(() => Synthese)
   synthese : Synthese

   
   @HasMany(() => Rapport)
   rapports: Rapport[];


}



