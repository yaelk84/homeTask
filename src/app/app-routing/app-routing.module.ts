import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CONSTANTS} from '../constants';

const routes: Routes = [
  {
    path: CONSTANTS.ROUTES.HOME,
    loadChildren: () => import('../feature/home/home.module').then(m => m.HomeModule)
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
