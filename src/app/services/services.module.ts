import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppInitService} from './api.init';
import {ApiService} from './api.service';
import {UtilsService} from "./utils.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ApiService,
    AppInitService,
    UtilsService

  ]
})
export class ServicesModule { }
