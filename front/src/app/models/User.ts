
import { Commentaire } from './Commentaire';

export class User{

    id: number;

    username: string;

    createdAt: Date;
   
    updatedAt: Date;
    
    commentaires: Commentaire[];
}
