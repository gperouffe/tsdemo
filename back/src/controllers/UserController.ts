import { Express } from "express";
import { User } from '../models/User';
import { HTTP_CODES } from '../utils/HTTP_CODES';

let root = '/users';

export function UserController(app: Express) {

    app.get(root, (req, res) => {
        res.statusCode = HTTP_CODES.OK;
        User.findAll().then(
            users =>{
                res.json(users);
            }
        )
    });

    app.get(root + "/:id", (req, res) => {
        let id = req.params.id;
        User.findOne({where:{ id: id}}).then(
            user =>{
                if(user!=null)
                    res.statusCode = HTTP_CODES.OK;
                else
                    res.statusCode = HTTP_CODES.NO_CONTENT;
                res.json(user);
            }
        )
    });

    app.post(root, (req, res) => {
        let newUser = User.build(req.body);
        console.log(newUser);
        newUser.save().then(
            user =>{ 
                res.statusCode = HTTP_CODES.CREATED;
                res.json(user)
            },
            err =>{
                res.statusCode = HTTP_CODES.SERVER_ERROR;
                res.end();
            }
        )

    });

    app.get(root, (req, res) => {
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