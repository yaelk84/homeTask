
import {Observable} from 'rxjs';

import {Idata} from '../../models/model';
import {ApiService} from '../../services/api.service';
import {RadioItem} from '../../shared/components/radio/radio.component';


export class HomeService {



  constructor(private apiService: ApiService) {
  }

  public getDivisions(): Observable<RadioItem[]> {
    return this.apiService.getDivisions();
  }
  public submit(params: Idata): Observable<boolean> {
    return this.apiService.saveData(params);
  }


}
