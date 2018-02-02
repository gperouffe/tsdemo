import {Sequelize} from 'sequelize-typescript';
import {User} from './models/User';

import {UserController} from './controllers/UserController'

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
    const alice = User.build({username: 'alice'});
    alice.save();
});

const app = express();

UserController(app);

app.listen(3000);
console.log("c'est parti");