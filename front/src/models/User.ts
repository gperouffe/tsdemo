
import { Commentaire } from './Commentaire';

export class User{
    username: string;
    createdAt: Date;
    updatedAt: Date;
    
    commentaires: Commentaire[];
}
