import { Injectable } from '@angular/core';
import { GenericApiService } from './generic-api.service';
import { User } from '../../models/User';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserApiService extends GenericApiService<User> {

  constructor(
    protected http: Http
  ) { 
    super(http);
    this.controller = "users";
  }

  getByUsername(username: string): Observable<User>{
    let params = new URLSearchParams();
    params.append("username", username);

    return this.http
      .get(this.BASE_URL + "/" + this.controller, {params: params})
      .pipe(
        map((res: Response) => res.json())
      );
  }
}
