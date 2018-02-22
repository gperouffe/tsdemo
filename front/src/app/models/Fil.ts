
import { Commentaire } from './Commentaire';

export class Fil{

    id: number;

    titre: string;

    createdAt: Date;
   
    updatedAt: Date;
    
    commentaires: Commentaire[];
    
    fils: Fil[];

    parentId: number;
    
    parent: Fil;

}