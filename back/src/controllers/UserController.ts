import { Express } from "express";
import { User } from '../models/User';
import { HTTP_CODES } from '../utils/HTTP_CODES';
import { GenericController } from "./GenericController";

export class UserController extends GenericController<User>{
    constructor(){
        super("/users", User);
    }

    public setup(app: Express){
        super.setup(app);
        app.get(this.root + "/byusername", (req, res) => {
            let username = req.query.username;
            User.findOne({where:{ username: username}}).then(
                user =>{
                    if(user!=null)
                        res.statusCode = HTTP_CODES.OK;
                    else
                        res.statusCode = HTTP_CODES.NO_CONTENT;
                    res.json(user);
                }
            )
        });
    }
}