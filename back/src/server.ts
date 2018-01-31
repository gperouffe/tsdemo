import {Sequelize} from 'sequelize-typescript';
import {User} from './models/User'

import * as http from 'http';
import * as express from 'express';
 
const sequelize =  new Sequelize({
        database: 'forumDB',
        dialect: 'sqlite',
        username: 'root',
        password: '',
        storage: ':memory:',
        modelPaths: [__dirname + '/models']
});

sequelize.addModels([User]);

sequelize.sync().then(()=>{
        const bob = User.build({username: 'bob'});
        bob.save();
});

const app = express();

app.get('/', (request, response) => {
        response.statusCode = 200;
        User.findOne().then(
                user =>{
                        response.json(user.toJSON());
                }
        )
    });

app.listen(3000);
console.log("c'est parti");