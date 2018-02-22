import { Express } from "express";
import { Commentaire } from '../models/Commentaire';
import { HTTP_CODES } from '../utils/HTTP_CODES';
import { GenericController } from "./GenericController";

export class CommentaireController extends GenericController<Commentaire>{
    constructor(){
        super("/commentaires", Commentaire);
    }
}