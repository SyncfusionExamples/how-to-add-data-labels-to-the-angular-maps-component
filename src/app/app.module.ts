import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
