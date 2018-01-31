
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
export class User extends Model<User>{

    @Column
    username: string;

    @CreatedAt
    createdAt: Date;
   
    @UpdatedAt
    updatedAt: Date;
    
    @HasMany(() => Commentaire, "userId")
    commentaires: Commentaire[];
}
