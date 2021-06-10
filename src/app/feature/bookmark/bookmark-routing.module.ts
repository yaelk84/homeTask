import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookmarkComponent} from './bookmark.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BookmarkComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookmarkRoutingModule { }
