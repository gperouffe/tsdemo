import { Injectable } from '@angular/core';
import { GenericApiService } from './generic-api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Commentaire } from '../../models/Commentaire';

@Injectable()
export class CommentaireApiService extends GenericApiService<Commentaire> {

  constructor(
    protected http: Http
  ) { 
    super(http);
    this.controller = "commentaires"
  }

}
