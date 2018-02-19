import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class GenericApiService<T> {

  constructor(
    protected http: Http
  ) { }

  protected BASE_URL = "http://localhost:3000";
  protected controller = "";

  get(): Observable<T[]>{
    return this.http
      .get(this.BASE_URL + "/" + this.controller)
      .pipe(
        map((res: Response) => res.json())
      );
  }

  getById(id: number): Observable<T>{
    return this.http
      .get(this.BASE_URL + "/" + this.controller + '/' + id)
      .pipe(
        map((res: Response) => res.json())
      );
  }

  create(obj: T): Observable<T>{
    return this.http
      .post(this.BASE_URL + "/" + this.controller, obj)
      .pipe(
        map((res: Response) => res.json())
      );
  }


}
