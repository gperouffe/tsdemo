
import { User } from './User';
import { Fil } from './Fil';

export class Commentaire {
    text: string;
    createdAt: Date;
    updatedAt: Date;
    
    userId: number;
    user: User;
    filId: number;
    fil: Fil;
}