import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {ServicesModule} from './services/services.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ServicesModule


  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
