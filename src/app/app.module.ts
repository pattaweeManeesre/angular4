import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartWebComponent } from './start-web/start-web.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { PersonService } from '../_service/person/person.service';
import { HttpModule } from '@angular/http';
import { TabelPageComponent } from './tabel-page/tabel-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StartWebComponent,
    DetailPageComponent,
    TabelPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
