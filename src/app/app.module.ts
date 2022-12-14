import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormioModule } from '@formio/angular';
import { FormioNpsModule } from 'formio-nps'
import { FormioProgressBarModule } from 'formio-progress-bar'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    FormioNpsModule,
    FormioProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
