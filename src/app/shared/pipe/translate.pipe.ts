import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from "../../services/translate.service";


/**
 * example
 * {{'testTranslation' | amdocsTranslate}}
 */
@Pipe({
  name: 'testTranslation'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {

  }

  transform(value: any, args?: any): any {
    return this.translate.getText(value, args);
  }

}
