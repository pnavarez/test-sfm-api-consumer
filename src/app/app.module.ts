import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IboComponent } from './ibo/ibo.component';

import { IboService } from './ibo.service';

@NgModule({
  declarations: [
    AppComponent,
    IboComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IboService],
  bootstrap: [AppComponent]
})
export class AppModule { }
