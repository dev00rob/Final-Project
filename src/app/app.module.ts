import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';
import { SearchComponent } from './search/search.component';

import { routes } from './app.router';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    routes,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
