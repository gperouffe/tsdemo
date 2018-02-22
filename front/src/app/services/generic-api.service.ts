import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Globals } from '../globals';

@Injectable()
export class GenericApiService<T, VMT> {

  constructor(
    protected http: Http,
    protected globals: Globals
  ) { }

  protected get BASE_URL() {
    return this.globals.BASE_URL;
  } 
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
      .get(this.BASE_URL + "/" + this.controller, {params: {id: id}})
      .pipe(
        map((res: Response) => res.json())
      );
  }

  create(obj: VMT): Observable<T>{
    return this.http
      .post(this.BASE_URL + "/" + this.controller, obj)
      .pipe(
        map((res: Response) => res.json())
      );
  }


}
