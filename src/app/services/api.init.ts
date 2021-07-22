import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {IHttpType, IResult, IServerDataItem, IUser} from '../models/model';
import {CONSTANTS} from '../constants';
import {ApiService} from './api.service';
import {TranslateService} from "./translate.service";

/*@Injectable({
  providedIn: 'root'
})*/
export class AppInitService {


  constructor(private translateService: TranslateService) {
  }


    public Init(): Observable<boolean> {

      return this.translateService.loadTranslate();





  }





}
