import { Express } from "express";
import { Commentaire } from '../models/Commentaire';
import { HTTP_CODES } from '../utils/HTTP_CODES';

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

    app.get(root + "/:id", (req, res) => {
        let id = req.params.id;
        Commentaire.findOne({where:{ id: id}}).then(
            comm =>{
                if(comm!=null)
                    res.statusCode = HTTP_CODES.OK;
                else
                    res.statusCode = HTTP_CODES.NO_CONTENT;
                res.json(comm);
            }
        )
    });

    app.post(root, (req, res) => {
        let newComm = Commentaire.build(req.body);
        console.log(newComm);
        newComm.save().then(
            comm =>{ 
                res.statusCode = HTTP_CODES.CREATED;
                res.json(comm)
            },
            err =>{
                res.statusCode = HTTP_CODES.SERVER_ERROR;
                res.end();
            }
        )

    });
}