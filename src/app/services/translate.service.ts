import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private textTranslation: any;
  constructor(private httpClient: HttpClient) { }

  public loadTranslate(): Observable<boolean> {

    return this.httpClient.get(`/assets/translate/en`).pipe(
      mergeMap((json) => {
        this.setTranslation(json);
        return of(true);
      })
    );
  }

  setTranslation(obj: any): void {
    this.textTranslation = obj;
  }

  getText(key: string): string {
    if (!key) {
      return '';
    }
    const value = key.split('.')
      .reduce((previous, current) => previous[current], this.textTranslation) || '';

    if (value.length > 0) {

      return value;
    }
    return key;
  }
}
