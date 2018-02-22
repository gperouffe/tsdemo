import { Express } from "express";
import { Fil } from '../models/Fil';
import { HTTP_CODES } from '../utils/HTTP_CODES';
import { GenericController } from "./GenericController";

export class FilController extends GenericController<Fil>{
    constructor(){
        super("/fils", Fil);
    }

    public setup(app: Express){
        super.setup(app);
        
        app.get(this.root + "/byparent", (req, res) => {
            let parentId = req.query.parentId;
            if(parentId == "null"){
                parentId = null;
            }
            Fil.findAll({
                where:{ parentId: parentId},
                include: [{model: Fil, as: "parent"}]
            }).then(
                fils =>{
                    if(fils!=null)
                        res.statusCode = HTTP_CODES.OK;
                    else
                        res.statusCode = HTTP_CODES.NO_CONTENT;
                    res.json(fils);
                }
            )
        });
    }
}