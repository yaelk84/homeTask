
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Idata} from '../models/model';
import {RadioItem} from "../shared/components/radio/radio.component";

export class ApiService {


  constructor(private http: HttpClient) {
  }

  public getDivisions(): Observable<RadioItem[]> {

    return this.http.get('/assets/stub/division.json').pipe(
      mergeMap((response: { divisions: [] }) => {
       const auto: RadioItem[] = response.divisions.map((item: {img: string, text: string}) => {
          return  new RadioItem(item.img, item.text);

      });
       return of(auto);
      
      })
    );
  }
  public saveData(params: Idata): Observable<boolean> {
// replace to get because of the stub
    return this.http.get('/assets/stub/saveData.json').pipe(
      mergeMap((response: { success: boolean}) => {

        return of(response.success);

      })
    );
  }

}
