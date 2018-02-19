import { Injectable } from '@angular/core';
import { GenericApiService } from './generic-api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Fil } from '../../models/Fil';

@Injectable()
export class FilApiService extends GenericApiService<Fil> {

  constructor(
    protected http: Http
  ) { 
    super(http);
    this.controller = "fils"
  }

}
