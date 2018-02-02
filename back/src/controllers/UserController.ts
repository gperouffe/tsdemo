import { Express } from "express";
import { User } from '../models/User';

let root = '/users';

export function UserController(app: Express) {

    app.get(root, (request, response) => {
        response.statusCode = 200;
        User.findAll().then(
            users =>{
            response.json(users);
            }
        )
    });

}