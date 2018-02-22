import { Injectable } from '@angular/core';
import { GenericApiService } from './generic-api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Fil } from '../models/Fil';
import { VMFil } from '../viewmodels/VMFil';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Globals } from '../globals';

@Injectable()
export class FilApiService extends GenericApiService<Fil, VMFil> {

  constructor(
    protected http: Http,
    protected globals: Globals
  ) { 
    super(http, globals);
    this.controller = "fils"
  }

  getByParent(parentId: number): Observable<Fil[]>{
    return this.http
      .get(this.BASE_URL + "/" + this.controller + "/byparent", {params: {parentId: parentId}})
      .pipe(
        map((res: Response) => res.json())
      );
  }
}
