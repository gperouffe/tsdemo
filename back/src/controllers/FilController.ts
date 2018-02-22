import { Express } from "express";
import { Fil } from '../models/Fil';
import { HTTP_CODES } from '../utils/HTTP_CODES';
import { GenericController } from "./GenericController";

export class FilController extends GenericController<Fil>{
    constructor(){
        super("/fils", Fil);
    }
}