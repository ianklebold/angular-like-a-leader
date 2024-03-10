import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeCustomPipe } from './pipes/pipe-custom.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeCustomPipe,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
