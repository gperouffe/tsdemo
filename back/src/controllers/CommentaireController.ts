import { Express } from "express";
import { Commentaire } from '../models/Commentaire';
import { HTTP_CODES } from '../utils/HTTP_CODES';
import { GenericController } from "./GenericController";
import { User } from "../models/User";

export class CommentaireController extends GenericController<Commentaire>{
    constructor(){
        super("/commentaires", Commentaire);
    }

    public setup(app: Express){
        super.setup(app);
        
        app.get(this.root + "/byfil", (req, res) => {
            let filId = req.query.filId;
            if(filId == "null"){
                filId = null;
            }
            Commentaire.findAll({
                where:{ filId: filId},
                include: [User]
            }).then(
                comms =>{
                    if(comms!=null)
                        res.statusCode = HTTP_CODES.OK;
                    else
                        res.statusCode = HTTP_CODES.NO_CONTENT;
                    res.json(comms);
                }
            )
        });
    }
}