import {Sequelize} from 'sequelize-typescript';

import { User } from './models/User';
import { Commentaire } from 'src/models/Commentaire';
import { Fil } from 'src/models/Fil';

import {UserController} from './controllers/UserController'

import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { CommentaireController } from 'src/controllers/CommentaireController';
import { FilController } from 'src/controllers/FilController';

const sequelize =  new Sequelize({
    database: 'forumDB',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory:',
    modelPaths: [__dirname + '/models']
});

sequelize.addModels([User, Commentaire, Fil]);

sequelize.sync().then(()=>{
    const bob = User.build({username: 'bob'});
    bob.save();
    const alice = User.build({username: 'alice'});
    alice.save();
});

const app = express();

//Middlewares
app.use(bodyParser.json());

//Contrôleurs
UserController(app);
CommentaireController(app);
FilController(app);

app.listen(3000);
console.log("c'est parti");