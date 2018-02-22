import { Injectable } from '@angular/core';
import { GenericApiService } from './generic-api.service';
import { User } from '../models/User';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { VMUser } from '../viewmodels/VMUser';
import { HttpParams } from '@angular/common/http';
import { Globals } from '../globals';

@Injectable()
export class UserApiService extends GenericApiService<User, VMUser> {

  constructor(
    protected http: Http,
    protected globals: Globals
  ) { 
    super(http, globals);
    this.controller = "users";
  }

  getByUsername(username: string): Observable<User>{

    return this.http
      .get(this.BASE_URL + "/" + this.controller + "/byusername", {params: {username: username}})
      .pipe(
        map((res: Response) => res.json())
      );
  }
}
