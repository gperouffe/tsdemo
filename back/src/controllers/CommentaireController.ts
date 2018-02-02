import { Express } from "express";
import { Commentaire } from '../models/Commentaire';

let root = '/commentaires';

export function CommentaireController(app: Express) {

    app.get(root, (request, response) => {
        response.statusCode = 200;
        Commentaire.findAll().then(
            comments =>{
            response.json(comments);
            }
        )
    });

}