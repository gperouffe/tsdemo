import { Express } from "express";
import { Fil } from '../models/Fil';
import { HTTP_CODES } from '../utils/HTTP_CODES';

let root = '/fils';

export function FilController(app: Express) {

    app.get(root, (request, response) => {
        response.statusCode = HTTP_CODES.OK;
        Fil.findAll().then(
            fils =>{
            response.json(fils);
            }
        )
    });

    app.get(root + "/:id", (req, res) => {
        let id = req.params.id;
        Fil.findOne({where:{ id: id}}).then(
            fil =>{
                if(fil!=null)
                    res.statusCode = HTTP_CODES.OK;
                else
                    res.statusCode = HTTP_CODES.NO_CONTENT;
                res.json(fil);
            }
        )
    });

    app.post(root, (req, res) => {
        let newFil = Fil.build(req.body);
        console.log(newFil);
        newFil.save().then(
            fil =>{ 
                res.statusCode = HTTP_CODES.CREATED;
                res.json(fil)
            },
            err =>{
                res.statusCode = HTTP_CODES.SERVER_ERROR;
                res.end();
            }
        )

    });

}