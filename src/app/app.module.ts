import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NullStringComponent } from './null-string/null-string.component';
import { StringToNumberFieldComponentComponent } from './string-to-number-field-component/string-to-number-field-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NullStringComponent,
    StringToNumberFieldComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
