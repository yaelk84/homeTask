
import {Observable} from 'rxjs';

import {TranslateService} from './translate.service';

export class AppInitService {


  constructor(private translateService: TranslateService) {
  }

    public Init(): Observable<boolean> {

      return this.translateService.loadTranslate();





  }





}
