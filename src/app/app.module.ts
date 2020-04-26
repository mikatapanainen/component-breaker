import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test21Component } from './test21/test21.component';
import { Test22Component } from './test22/test22.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test21Component,
    Test22Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
