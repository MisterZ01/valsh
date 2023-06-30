import { Controlenv } from 'src/models/controlenv.model';
import { Model, Column, Table, HasMany, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { IsNotEmpty, IsString } from 'class-validator';




@Table({ tableName: 'image' })
export class Image extends Model {
@Column({
  primaryKey: true,
  autoIncrement : true
})
  id: number;


  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  image_users: string;

  @IsNotEmpty()
  @IsString()
  @Column({allowNull : true})
  description: string;

  @ForeignKey(() => Controlenv)
  @Column
   id_controlenv:number;
   @BelongsTo(() => Controlenv)
   controlenv: Controlenv;

}