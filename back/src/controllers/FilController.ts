import { Express } from "express";
import { Fil } from '../models/Fil';

let root = '/fils';

export function FilController(app: Express) {

    app.get(root, (request, response) => {
        response.statusCode = 200;
        Fil.findAll().then(
            fils =>{
            response.json(fils);
            }
        )
    });

}