
import {
    Table, 
    Column, 
    Model, 
    HasMany, 
    CreatedAt, 
    UpdatedAt,
    ForeignKey,
    BelongsTo,
    PrimaryKey,
    AutoIncrement
} from 'sequelize-typescript';
import { User } from './User';
import { Fil } from './Fil';

@Table 
export class Commentaire extends Model<Commentaire>{

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    text: string;

    @CreatedAt
    createdAt: Date;
   
    @UpdatedAt
    updatedAt: Date;

    @ForeignKey(() => User)
    @Column
    userId: number;
    
    @BelongsTo(() => User, "userId")
    user: User;

    @ForeignKey(() => Fil)
    @Column
    filId: number;
    
    @BelongsTo(() => Fil, "filId")
    fil: Fil;
}