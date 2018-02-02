import { Express } from "express";
import { User } from '../models/User';

let root = '/users';

export function UserController(app: Express) {

    app.get(root, (req, res) => {
        res.statusCode = 200;
        User.findAll().then(
            users =>{
                res.json(users);
            }
        )
    });

    app.get(root + "/:username", (req, res) => {
        let username = req.params.username;
        User.findOne({where:{ username: username}}).then(
            user =>{
                if(user!=null)
                    res.statusCode = 200;
                else
                    res.statusCode = 204;
                res.json(user);
            }
        )
    });

    app.post(root, (req, res) => {
        let newUser = User.build(req.body);
        console.log(newUser);
        newUser.save().then(
            user =>{ 
                res.statusCode = 201;
                res.json(user)
            },
            err =>{
                res.statusCode = 500;
                res.end();
            }
        )

    });
}