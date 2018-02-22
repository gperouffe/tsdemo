import { Injectable } from '@angular/core';
import { GenericApiService } from './generic-api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Commentaire } from '../models/Commentaire';
import { map } from 'rxjs/operators';
import { VMCommentaire } from '../viewmodels/VMCommentaire';
import { Globals } from '../globals';

@Injectable()
export class CommentaireApiService extends GenericApiService<Commentaire, VMCommentaire> {

  constructor(
    protected http: Http,
    protected globals: Globals
  ) { 
    super(http, globals);
    this.controller = "commentaires"
  }


  getByFil(filId: number): Observable<Commentaire[]>{
    return this.http
      .get(this.BASE_URL + "/" + this.controller + "/byfil", {params: {filId: filId}})
      .pipe(
        map((res: Response) => res.json())
      );
  }
}
