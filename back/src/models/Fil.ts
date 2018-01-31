
import {
    Table, 
    Column, 
    Model, 
    HasMany, 
    CreatedAt, 
    UpdatedAt,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { Commentaire } from './Commentaire';

@Table 
export class Fil extends Model<Fil>{

    @CreatedAt
    createdAt: Date;
   
    @UpdatedAt
    updatedAt: Date;
    
    @HasMany(() => Commentaire, "filId")
    commentaires: Commentaire[];
    
    @HasMany(() => Fil, "parentId")
    fils: Fil[];

    @ForeignKey(() => Fil)
    @Column
    parentId: number;
    
    @BelongsTo(() => Fil, "parentId")
    parent: Fil;

}