import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CONSTANTS} from '../constants';

const routes: Routes = [
  {
    path: CONSTANTS.ROUTES.HOME,
    loadChildren: () => import('../feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: CONSTANTS.ROUTES.BOOKMARK,
    loadChildren: () => import('../feature/bookmark/bookmark.module').then(m => m.BookmarkModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
