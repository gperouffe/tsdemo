import {Sequelize} from 'sequelize-typescript';

import { User } from './models/User';
import { Commentaire } from './models/Commentaire';
import { Fil } from './models/Fil';

import {UserController} from './controllers/UserController'

import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { CommentaireController } from './controllers/CommentaireController';
import { FilController } from './controllers/FilController';

import * as cors from 'cors';

const sequelize =  new Sequelize({
    database: 'forumDB',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory:',
    modelPaths: [__dirname + '/models'],
    logging: false
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

app.use(cors({origin: '*'}));

//Contrôleurs
let usrCtrlr = new UserController();
usrCtrlr.setup(app);
let commentCtrlr = new CommentaireController();
commentCtrlr.setup(app);
let filCtrlr = new FilController();
filCtrlr.setup(app);

app.listen(3000);
console.log("Démarrage du serveur");
