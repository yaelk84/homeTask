import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultDisplayComponent} from './result-display/result-display.component';
import {TranslatePipe} from './pipe/translate.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [ResultDisplayComponent, TranslatePipe, DropdownComponent],
  exports: [
    ResultDisplayComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
