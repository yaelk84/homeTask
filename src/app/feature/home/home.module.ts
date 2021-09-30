import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeService} from './home.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {LengthConverterComponent} from "../length-converter/length-converter.component";



@NgModule({
  declarations: [HomeComponent, LengthConverterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule

  ],
  providers:[HomeService]
})
export class HomeModule { }
