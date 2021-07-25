import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultDisplayComponent} from './result-display/result-display.component';
import {TranslatePipe} from './pipe/translate.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import {ReactiveFormsModule} from '@angular/forms';

import { RadioComponent } from './components/radio/radio.component';
import { InputTextComponent } from './components/input-text/input-text.component';





@NgModule({
  declarations: [ResultDisplayComponent, TranslatePipe, DropdownComponent, CheckboxComponent, RadioComponent, InputTextComponent],
  exports: [
    ResultDisplayComponent,
    DropdownComponent,
    CheckboxComponent,
    RadioComponent,
    TranslatePipe,
    InputTextComponent


  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule


  ]
})
export class SharedModule { }
