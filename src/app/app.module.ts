import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MusicFormComponent } from './music-form/music-form.component';
import { DisplayComponent } from './display/display.component';
import { PersonalRecComponent } from './personal-rec/personal-rec.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicFormComponent,
    DisplayComponent,
    PersonalRecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
