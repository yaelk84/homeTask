import {BrowserModule} from '@angular/platform-browser';
import {NgModule,APP_INITIALIZER,} from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {AppComponent} from './app.component';
import {CONSTANTS} from './constants';
import {HttpClientModule} from '@angular/common/http';
import {AppInitService} from './services/api.init';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ApiService} from './services/api.service';
const routes: Routes = [
  {
    path: CONSTANTS.ROUTES.HOME,
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: CONSTANTS.ROUTES.BOOKMARK,
    loadChildren: () => import('./feature/bookmark/bookmark.module').then(m => m.BookmarkModule)
  }
];


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
