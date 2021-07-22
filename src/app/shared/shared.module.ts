import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultDisplayComponent} from './result-display/result-display.component';
import {TranslatePipe} from './pipe/translate.pipe';

@NgModule({
  declarations: [ResultDisplayComponent, TranslatePipe],
  exports: [
    ResultDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
