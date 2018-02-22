import { Express } from "express";
import { HTTP_CODES } from '../utils/HTTP_CODES';
import { Model } from "sequelize-typescript";

export class GenericController<T extends Model<T>>{

    constructor(
        protected root:string, 
        protected data: any)
    {}

    public setup(app: Express) {

        app.get(this.root, (request, response) => {
            response.statusCode = HTTP_CODES.OK;
            this.data.findAll().then(
                (list: any) =>{
                    response.json(list);
                }
            )
        });

        app.get(this.root, (req, res) => {
            let id = req.query.id;
            this.data.findOne({where:{ id: id}}).then(
                (obj: any) =>{
                    if(obj!=null)
                        res.statusCode = HTTP_CODES.OK;
                    else
                        res.statusCode = HTTP_CODES.NO_CONTENT;
                    res.json(obj);
                }
            )
        });

        app.post(this.root, (req, res) => {
            let newObj = this.data.build(req.body);
            console.log(newObj);
            newObj.save().then(
                (obj: any) =>{ 
                    res.statusCode = HTTP_CODES.CREATED;
                    res.json(obj)
                },
                (err: any) =>{
                    res.statusCode = HTTP_CODES.SERVER_ERROR;
                    res.end();
                }
            )

        });
    }
}