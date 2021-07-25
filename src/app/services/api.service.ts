import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { IRadio} from '../models/model';
import {CONSTANTS} from '../constants';

/*@Injectable({
  providedIn: 'root'
})*/
export class ApiService {


  constructor(private http: HttpClient) {
  }

  public getDivisions(): Observable<IRadio[]> {

    return this.http.get('/assets/stub/division.json').pipe(
      mergeMap((response: { divisions: [] }) => {
       const auto: IRadio[] = response.divisions.map((item: {img: string, text: string}) => {
          return {id: item.img, desc: item.text};

      });
       return of(auto);
      
      })
    );
  }

}
