import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultDisplayComponent} from './result-display/result-display.component';

@NgModule({
  declarations: [ResultDisplayComponent],
  exports: [
    ResultDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
