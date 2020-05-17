import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NullStringComponent } from './null-string/null-string.component';
import { ArrayItemNotFoundComponent } from './array-item-not-found/array-item-not-found.component';
import { ArrayItemNotFoundWrongKeyTypeComponent } from './array-item-not-found-wrong-key-type/array-item-not-found-wrong-key-type.component';

@NgModule({
  declarations: [
    AppComponent,
    NullStringComponent,
    ArrayItemNotFoundComponent,
    ArrayItemNotFoundWrongKeyTypeComponent
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
