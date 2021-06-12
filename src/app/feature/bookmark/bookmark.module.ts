import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookmarkComponent} from './bookmark.component';
import {BookmarkRoutingModule} from './bookmark-routing.module';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [BookmarkComponent],
  imports: [
    CommonModule,
    BookmarkRoutingModule,
    SharedModule
  ]
})
export class BookmarkModule {

}
